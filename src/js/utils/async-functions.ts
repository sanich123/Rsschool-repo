import { createLoader } from "../markup/create-loader";
import CreateGarage from "../pages/create-garage";
import { HEADERS_INFO, METHODS_HTTP, NETWORK_ERROR, ROOT_URL, SEARCH_PARAMS, URL_ROUTES } from "./const";
import { CarsType, WinnersType } from "./types";

export async function getCars() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.garage}`);
    return await response.json();
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
  } catch { }
}

export async function deleteCar(id: string) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.garage}/${id}`, {
      method: METHODS_HTTP.delete,
    });
  } catch { }
}

export async function updateCar(carData: Omit<CarsType, "id">, id: string) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.garage}/${id}`, {
      method: METHODS_HTTP.put,
      headers: HEADERS_INFO,
      body: JSON.stringify(carData),
    });
  } catch { }
}

export async function getWinners(params = "") {
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.winners}${params}`);
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.toString())
    }
  }
}

export async function sendCars(cars: Omit<CarsType, "id">[]) {
  return Promise.all(cars.map((car) => createCar(car))).then(() => CreateGarage());
}

export async function createWinner(winnersData: WinnersType) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.winners}`, {
      method: METHODS_HTTP.post,
      headers: HEADERS_INFO,
      body: JSON.stringify(winnersData),
    });
  } catch { }
}

export async function startEngine(id: string) {
  try {
    const response = await fetch(
      `${ROOT_URL}/${URL_ROUTES.engine}?${SEARCH_PARAMS.id}=${id}&${SEARCH_PARAMS.status}=${SEARCH_PARAMS.started}`,
      { method: METHODS_HTTP.patch });
    const data = await response.json();
    return data;
  } catch { }
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
  } catch { }
}

export async function receiveDriveMode(id: string, node: HTMLElement, end: number, duration: number) {
  let animationId = 0;
  const stopBtn = document.querySelector(`.stop-btn-${id}`) as HTMLButtonElement;
  const startBtn = document.querySelector(`.start-btn-${id}`) as HTMLButtonElement;
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

  stopBtn?.addEventListener("click", async () => {
    await stopEngine(id);
    if (animationId) {
      cancelAnimationFrame(animationId);
      node.style.transform = 'translateX(0)';
      stopBtn.disabled = true;
      startBtn.disabled = false;
    }
  });
  animatePosition(node, end, duration);

  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.engine}?${SEARCH_PARAMS.id}=${id}&${SEARCH_PARAMS.status}=${SEARCH_PARAMS.drive}`,
      { method: METHODS_HTTP.patch });
    const { status } = response;
    if (status === 500) {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    } else {
      return Number(id);
    }
  } catch { }
}

export async function getWinner(id: number) {
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.winners}/${id}`);
    const data = await response.json();
    return { response, data }
  } catch {

  }
}

export async function updateWinner(id: number, winnerData: { wins: number, time: number }) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.winners}/${id}`, {
      method: METHODS_HTTP.put,
      headers: HEADERS_INFO,
      body: JSON.stringify(winnerData),
    });
  } catch {

  }
}

export async function deleteWinner(id: number) {
  try {
    await fetch(`${ROOT_URL}/${URL_ROUTES.winners}/${id}`, {
      method: METHODS_HTTP.delete,
    });
  } catch {

  }
}