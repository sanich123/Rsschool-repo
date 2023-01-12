import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { createLoader } from "../markup/create-loader";

export default function CreateGarage(carsList = []) {
  const body = document.querySelector(".page") as HTMLBodyElement;

  if (!carsList.length) {
    body.innerHTML = `${createLoader()}`
  } else {
    body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(carsList)}</main>`
    console.log(carsList);
  }


}
