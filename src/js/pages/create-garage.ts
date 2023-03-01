import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { FAILED_SEARCH, LS_KEYS, ROUTES } from "../utils/const";
import { getCars } from "../utils/async-functions";
import { CarsType } from "../utils/types";
import { setRightPage } from "../utils/utils";
import { getPaginatedData, incrementDecrementPage } from "../utils/pagination";
import { getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { disableNodes, enableNodes } from "../nodes/actions-with-nodes";
import { pushState } from "../utils/router";
import { createCarFromForm, createSuccessMessage, deleteSelectCar, generateResetCars, getFinishedCars, getTopSpeedRacer, sendOrCreateWinner, startCar, updateCarFromForm, updateCarNameColor } from "../utils/action-nodes";

export default async function CreateGarage() {
  const body = document.querySelector(".page") as HTMLBodyElement;
  const carsList = await getCars();
  setDefaultPageToLocalStorage(carsList.length);
  const pageNumber = getFromLocalStorage(LS_KEYS.pageNumber);
  const { paginatedData, amountPages } = getPaginatedData(carsList, pageNumber);
  setRightPage(pageNumber, amountPages);
  body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(carsList, paginatedData as CarsType[], amountPages)}</main>`;
  const { createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateColorInput, updateNameInput, updateCarBtn, raceResetGenerateBtns, paginationBtns, raceBtn, startStopBtns, generateCarsBtn, resetCarsBtn, selectDeleteBtns, stopBtns, garageLink, winnersLink, labelUpdateCar } = getGarageNodes();
  garageLink?.addEventListener('click', () => pushState(ROUTES.garage));
  winnersLink?.addEventListener('click', () => pushState(ROUTES.winners));
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
      if (createNameInput && createColorInput) {
        const { value: name } = createNameInput;
        const { value: color } = createColorInput;
        await createCarFromForm(name, color);
      }
    });

  carsListListener?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { name, value: id } = target;
      await deleteSelectCar(name, id, updateCarBtn, carsList, updateNameInput);
      await startCar(name, target);
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
    if (updateNameInput && updateColorInput) {
    const { value: name } = updateNameInput;
    const { value: color } = updateColorInput;
    const carName = carsList.filter((car: CarsType) => car.name.toLowerCase() === name.toLowerCase());
    if (carName.length) {
      const [{id: carId}] = carName;
      await updateCarFromForm(name, color, carId, labelUpdateCar);
    } else {
      labelUpdateCar ? labelUpdateCar.textContent = FAILED_SEARCH : '';
      setTimeout(() => labelUpdateCar ? labelUpdateCar.textContent = '' : '', 2000);
    }
  }
  });
  raceResetGenerateBtns?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { name } = target;
      await generateResetCars(name, stopBtns)
    }
  });
  paginationBtns?.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      incrementDecrementPage(value);
    }
  });
}
