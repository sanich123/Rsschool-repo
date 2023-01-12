import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { createLoader } from "../markup/create-loader";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { BTNS_VALUES } from "../utils/const";
import { createCar, deleteCar, getData, updateCar } from "../utils/data-actions";
import { CarsType } from "../utils/types";

export default function CreateGarage(carsList = []) {
  const body = document.querySelector(".page") as HTMLBodyElement;

  if (!carsList.length) {
    body.innerHTML = `${createLoader()}`;
  } else {
    body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(
      carsList
    )}</main>`;
    const { createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateColorInput, updateNameInput, updateCarBtn } = getGarageNodes();
    createCarForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const { value: name } = createNameInput;
      const { value: color } = createColorInput;
      if (name) {
        createCar({ name, color });
        getData();
      }
    });
    carsListListener.addEventListener('click', async ({ target }) => {
      if (target instanceof HTMLButtonElement) {
        const { name, value: id } = target;
        if (name.includes(BTNS_VALUES[1])) {
          deleteCar(id);
          getData();
        }
        if (name.includes(BTNS_VALUES[0])) {
          updateCarBtn.value = id;
          const [{name: carName}] = carsList.filter((car: CarsType) => car.id === Number(id));
          updateNameInput.value = carName;
        }
      }
    });
    updateCarForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { value: name } = updateNameInput;
      const { value: color } = updateColorInput;
      const { value: id } = updateCarBtn;
      if (name) {
        console.log(name, color, id);
        updateCar({name, color}, id);
        getData();
      }
    })
  }
}
