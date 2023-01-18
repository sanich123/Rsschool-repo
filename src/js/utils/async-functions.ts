import { createLoader } from "../markup/create-loader";
import CreateGarage from "../pages/create-garage";
import { HEADERS_INFO, LS_KEYS, METHODS_HTTP, NETWORK_ERROR, ROOT_URL, SEARCH_PARAMS, URL_ROUTES } from "./const";
import { CarsType, WinnersType } from "./types";
import CreateWinners from "../pages/create-winners";
import { applyToLocalStorage } from "./local-storage";

export async function getCars() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.garage}`);
    const json = await response.json();
    CreateGarage(json);
  } catch {
    body.innerHTML = NETWORK_ERROR;
  }
}

export async function createCar(carData: Omit<CarsType, "id">) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.garage}`, {
      method: METHODS_HTTP.post,
      headers: HEADERS_INFO,
      body: JSON.stringify(carData),
    });
  } catch {}
}

export async function deleteCar(id: string) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.garage}/${id}`, {
      method: METHODS_HTTP.delete,
    });
  } catch {}
}

export async function updateCar(carData: Omit<CarsType, "id">, id: string) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.garage}/${id}`, {
      method: METHODS_HTTP.put,
      headers: HEADERS_INFO,
      body: JSON.stringify(carData),
    });
  } catch {}
}

export async function getWinners(params = "") {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.winners}${params}`);
    const responseCars = await fetch(`${ROOT_URL}/${URL_ROUTES.garage}`);
    const cars = await responseCars.json();
    const winners = await response.json();
    applyToLocalStorage(LS_KEYS.cars, cars);
    CreateWinners(winners, cars);
  } catch {
    body.innerHTML = NETWORK_ERROR;
  }
}

export async function sendCars(cars: Omit<CarsType, "id">[]) {
  return Promise.all(cars.map((car) => createCar(car))).then(() => getCars());
}

export async function createWinner(winnersData: WinnersType) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.winners}`, {
      method: METHODS_HTTP.post,
      headers: HEADERS_INFO,
      body: JSON.stringify(winnersData),
    });
  } catch {}
}

export async function startEngine(id: string) {
  try {
    const response = await fetch(
      `${ROOT_URL}/${URL_ROUTES.engine}?${SEARCH_PARAMS.id}=${id}&${SEARCH_PARAMS.status}=${SEARCH_PARAMS.started}`,
      {
        method: METHODS_HTTP.patch,
      }
    );
    const data = await response.json();
    return data;
  } catch {}
}

export async function stopEngine(id: string) {
  try {
    const response = await fetch(
      `${ROOT_URL}/${URL_ROUTES.engine}?${SEARCH_PARAMS.id}=${id}&${SEARCH_PARAMS.status}=${SEARCH_PARAMS.stopped}`,
      {
        method: METHODS_HTTP.patch,
      }
    );
    const data = await response.json();
    return data;
  } catch {}
}

export async function receiveDriveMode(
  id: string,
  node: HTMLElement,
  end: number,
  duration: number
) {
  let animationId = 0;

  function animatePosition(node: HTMLElement, end: number, duration: number) {
    let currentX = 104;
    const framesCount = (duration / 1000) * 60;
    const dx = (end - currentX) / framesCount;
    const tick = () => {
      currentX += dx;
      node.style.transform = `translateX(${currentX}px)`;
      if (currentX < end) {
        animationId = requestAnimationFrame(tick);
      }
    };
    tick();
  }
  const stopBtn = document.querySelector(`.stop-btn-${id}`);
  stopBtn?.addEventListener("click", async () => {
    await stopEngine(id);
    if (animationId) {
      cancelAnimationFrame(animationId);
      node.style.transform = 'translateX(0)';
    }
  });
  animatePosition(node, end, duration);

  try {
    const response = await fetch(
      `${ROOT_URL}/${URL_ROUTES.engine}?${SEARCH_PARAMS.id}=${id}&${SEARCH_PARAMS.status}=${SEARCH_PARAMS.drive}`,
      {
        method: METHODS_HTTP.patch,
      }
    );
    const { status } = response;
    if (status === 500) {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    }
  } catch {}
}
