import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { LS_KEYS, ROUTES } from "../utils/const";
import { getCars } from "../utils/async-functions";
import { CarsType } from "../utils/types";
import { createCarFromForm, createSuccessMessage, deleteSelectCar, generateResetCars, getFinishedCars, getTopSpeedRacer, sendOrCreateWinner, setRightPage, startCar, updateCarFromForm, updateCarNameColor } from "../utils/utils";
import { getPaginatedData, incrementDecrementPage } from "../utils/pagination";
import { getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { disableNodes, enableNodes } from "../nodes/actions-with-nodes";
import Router from "../utils/router";

export default async function CreateGarage() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  const carsList = await getCars();
  setDefaultPageToLocalStorage(carsList.length);
  const pageNumber = getFromLocalStorage(LS_KEYS.pageNumber);
  const { paginatedData, amountPages } = getPaginatedData(carsList, pageNumber);
  setRightPage(pageNumber, amountPages);
  body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(carsList, paginatedData as CarsType[], amountPages)}</main>`;
  const { createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateColorInput, updateNameInput, updateCarBtn, raceResetGenerateBtns, paginationBtns, raceBtn, startStopBtns, generateCarsBtn, resetCarsBtn, selectDeleteBtns, stopBtns, garageLink, winnersLink } = getGarageNodes();
  garageLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.garage);
    Router();
  });
  winnersLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.winners);
    Router();
  });
  raceBtn?.addEventListener('click', async () => {
    disableNodes(generateCarsBtn, resetCarsBtn, startStopBtns, selectDeleteBtns)
    const { topSpeeds, finished } = await getFinishedCars(paginatedData as CarsType[])
    const filterWastedCars = finished.filter(Boolean);
    const { id, currentTime } = getTopSpeedRacer(topSpeeds, filterWastedCars);
    await sendOrCreateWinner(id, currentTime);
    createSuccessMessage(id, currentTime);
    enableNodes(generateCarsBtn, resetCarsBtn, startStopBtns, selectDeleteBtns);
  });
  createCarForm?.addEventListener('input', ({ target }) => {
    if (target instanceof HTMLInputElement) {
      const { value, name } = target;
      updateCarNameColor(value, name);
    }
  });
  createCarForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { value: name } = createNameInput;
    const { value: color } = createColorInput;
    await createCarFromForm(name, color);
  });
  carsListListener?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { name, value: id } = target;
      deleteSelectCar(name, id, updateCarBtn, carsList, updateNameInput);
      startCar(name, target);
    }
  });
  updateCarForm?.addEventListener('input', ({ target }) => {
    if (target instanceof HTMLInputElement) {
      const { value, name } = target;
      updateCarNameColor(value, name);
    }
  });
  updateCarForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { value: name } = updateNameInput;
    const { value: color } = updateColorInput;
    const { value: id } = updateCarBtn;
    await updateCarFromForm(name, color, id);
  });
  raceResetGenerateBtns?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { name } = target;
      generateResetCars(name, stopBtns)
    }
  });
  paginationBtns?.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      incrementDecrementPage(value);
    }
  });
}
