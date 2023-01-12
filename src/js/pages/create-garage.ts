import { createCar } from "../utils/create-icons";
import { getData } from "../utils/data-loaders";

export default function CreateGarage() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  const cars = getData();
}
