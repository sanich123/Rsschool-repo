import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { createLoader } from "../markup/create-loader";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { createCar, getData } from "../utils/data-actions";

export default function CreateGarage(carsList = []) {
  const body = document.querySelector(".page") as HTMLBodyElement;

  if (!carsList.length) {
    body.innerHTML = `${createLoader()}`;
  } else {
    body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(
      carsList
    )}</main>`;
    const { createCarForm, createNameInput, createColorInput } =
      getGarageNodes();

    createCarForm.addEventListener("submit", async () => {
      const { value: name } = createNameInput;
      const { value: color } = createColorInput;

      if (name) {
        createCar({ name, color });
        getData();
      }
    });
  }
}
