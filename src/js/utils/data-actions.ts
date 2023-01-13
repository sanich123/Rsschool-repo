import { createLoader } from "../markup/create-loader";
import CreateGarage from "../pages/create-garage";
import { HEADERS_INFO, METHODS_HTTP, ROOT_URL, URL_ROUTES } from "./const";
import { CarsType } from "../utils/types";
import CreateWinners from "../pages/create-winners";

export async function getCars() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  try {
    const response = await fetch(`${ROOT_URL}/garage`);
    const json = await response.json();
    CreateGarage(json);
  } catch {}
}

export async function createCar(carData: Omit<CarsType, "id">) {
  try {
    await fetch(ROOT_URL, {
      method: METHODS_HTTP.post,
      headers: HEADERS_INFO,
      body: JSON.stringify(carData),
    });
  } catch {}
}

export async function deleteCar(id: string) {
  try {
    await fetch(`${ROOT_URL}/${id}`, {
      method: METHODS_HTTP.delete,
    });
  } catch {}
}

export async function updateCar(carData: Omit<CarsType, "id">, id: string) {
  try {
    await fetch(`${ROOT_URL}/${id}`, {
      method: METHODS_HTTP.put,
      headers: HEADERS_INFO,
      body: JSON.stringify(carData),
    });
  } catch {}
}

export async function getWinners() {
  try {
    const response = await fetch(`${ROOT_URL}/${URL_ROUTES.winners}`);
    const responseCars = await fetch(`${ROOT_URL}/${URL_ROUTES.garage}`);
    const cars = await responseCars.json();
    const winners = await response.json();
    CreateWinners(winners, cars);
  } catch {}
}
