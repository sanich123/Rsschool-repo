import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { BTNS_VALUES, CAR_ICON_WIDTH_DEFAULT, LS_KEYS, PAGINATION_BTNS } from "../utils/const";
import { createCar, deleteCar, getCars, sendCars, updateCar } from "../utils/async-functions";
import { CarsType } from "../utils/types";
import { getRandomCarsColors } from "../utils/utils";
import { getPaginatedData } from "../utils/pagination";
import { applyToLocalStorage, getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";

export default async function CreateGarage(carsList = []) {
  const body = document.querySelector(".page") as HTMLBodyElement;
  setDefaultPageToLocalStorage(carsList.length);
  const { paginatedData, amountPages } = getPaginatedData(carsList, getFromLocalStorage(LS_KEYS.pageNumber));

  body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(carsList, paginatedData as CarsType[], amountPages)}</main>`;
  const { createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateColorInput, updateNameInput, updateCarBtn, raceResetGenerateBtns, paginationBtns} = getGarageNodes();

  createCarForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { value: name } = createNameInput;
    const { value: color } = createColorInput;
    if (name) {
      createCar({ name, color });
      getCars();
    }
  });
  carsListListener?.addEventListener("click", async ({ target }) => {
      if (target instanceof HTMLButtonElement) {
      const { name, value: id } = target;
      if (name.includes(BTNS_VALUES[1])) {
        deleteCar(id);
        getCars();
      }
      if (name.includes(BTNS_VALUES[0])) {
        updateCarBtn.value = id;
        const [{ name }] = carsList.filter((car: CarsType) => car.id === Number(id));
        updateNameInput.value = name;
      }
      if (name.includes('start-stop')) {
        const { value } = target;
        if (value.includes('start')) {
          const id = value.replace(/[a-z-]/gi, '');
          const carIcon = document.getElementById(`car-${id}`);
          const li = document.querySelector('.list-item') as HTMLLIElement;
          const style = Number(window.getComputedStyle(li).getPropertyValue('width').replace(/px/gi, ''));
          if (carIcon) {
            carIcon.style.transition = 'transform 3s ease-in';
            carIcon.style.transform = `translateX(${style - (CAR_ICON_WIDTH_DEFAULT * 2)}px)`;
          }
          
        }
      }
    }

  });
  updateCarForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { value: name } = updateNameInput;
    const { value: color } = updateColorInput;
    const { value: id } = updateCarBtn;
    if (name) {
      updateCar({ name, color }, id);
      getCars();
    }
  });
  raceResetGenerateBtns?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { name } = target;
      if (name === "generate") sendCars(getRandomCarsColors());
    }
  });
  paginationBtns?.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      const numberOfPage = Number(getFromLocalStorage(LS_KEYS.pageNumber));
      if (value === PAGINATION_BTNS.next) applyToLocalStorage(LS_KEYS.pageNumber, numberOfPage + 1);
      if (value === PAGINATION_BTNS.previous) applyToLocalStorage(LS_KEYS.pageNumber, numberOfPage - 1);
      CreateGarage(carsList);
    }
  });
}
