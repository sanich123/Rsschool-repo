import { createLoader } from "../markup/create-loader";
import CreateGarage from "../pages/create-garage";
import { HEADERS_INFO, METHODS_HTTP, NETWORK_ERROR, ROOT_URL, URL_ROUTES } from "./const";
import { CarsType } from "./types";
import CreateWinners from "../pages/create-winners";

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
  } catch {
    
  }
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

export async function getWinners() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.winners}`);
    const responseCars = await fetch(`${ROOT_URL}/${URL_ROUTES.garage}`);
    const cars = await responseCars.json();
    const winners = await response.json();
    CreateWinners(winners, cars);
  } catch {
    body.innerHTML = NETWORK_ERROR;
  }
}
