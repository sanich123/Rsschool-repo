import { createLoader } from "../markup/create-loader";
import CreateGarage from "../pages/create-garage";
import { ROOT_URL } from "./const";
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
  } catch {}
}
