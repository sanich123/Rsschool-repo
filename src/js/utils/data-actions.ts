import { createLoader } from "../markup/create-loader";
import CreateGarage from "../pages/create-garage";
import { HEADERS_INFO, METHODS_HTTP, ROOT_URL } from "./const";
import { CarsType } from "../utils/types";

export async function getData() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  try {
    const response = await fetch(ROOT_URL);
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
            method: METHODS_HTTP.delete
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
    } catch {

    }
}
