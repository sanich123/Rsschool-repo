import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { BTNS_VALUES, LS_KEYS, PAGINATION_BTNS } from "../utils/const";
import { createCar, createWinner, deleteCar, getCars, getWinner, receiveDriveMode, sendCars, startEngine, updateCar, updateWinner } from "../utils/async-functions";
import { CarsType } from "../utils/types";
import { getRandomCarsColors } from "../utils/utils";
import { getPaginatedData } from "../utils/pagination";
import { applyToLocalStorage, getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { getLengthOfParentContainer } from "../utils/animations";

export default async function CreateGarage(carsList = []) {
  const body = document.querySelector(".page") as HTMLBodyElement;
  setDefaultPageToLocalStorage(carsList.length);
  const { paginatedData, amountPages } = getPaginatedData(carsList, getFromLocalStorage(LS_KEYS.pageNumber));

  body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(carsList, paginatedData as CarsType[], amountPages)}</main>`;
  const { createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateColorInput, updateNameInput, updateCarBtn, raceResetGenerateBtns, paginationBtns, raceBtn } = getGarageNodes();

  raceBtn?.addEventListener('click', async () => {
    const topSpeeds: {id: number, duration: number}[] = [];
    const ids = paginatedData.map(({id}) => id);
    const end = getLengthOfParentContainer();
    const speedDistances = await Promise.all(ids.map((id) => startEngine(`${id}`)));
    const finished = await Promise.all(speedDistances.map(async ({ velocity, distance }, i) => {
      const duration = Math.floor(distance / velocity);
      topSpeeds.push({id: ids[i], duration});
      const carIcon = document.getElementById(`car-${ids[i]}`) as HTMLElement; 
      return await receiveDriveMode(`${ids[i]}`, carIcon, end, duration);
    }));
    const filterWastedCars = finished.filter(Boolean);
    const {id, duration: currentTime} = topSpeeds.filter(({id}) => filterWastedCars.includes(id)).sort((a, b) => a.duration - b.duration)[0];
    const winnerInfo = await getWinner(id);
    if (!winnerInfo?.response.ok) {
      await createWinner({ id, time: currentTime, wins: 1 });
    } else {
      const {id: availableId, wins: availableWins, time: availableTime} = winnerInfo?.data;
      if (availableTime > (currentTime / 1000)) {
        await updateWinner(availableId, {wins: availableWins + 1, time: (currentTime / 1000)})
      }
    }
  });

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
        const id = value.replace(/[a-z-]/gi, '');
        const carIcon = document.getElementById(`car-${id}`) as HTMLElement; 
        if (value.includes('start')) {
          const end = getLengthOfParentContainer();
          const { velocity, distance } = await startEngine(id);
          const duration = Math.floor(distance / velocity);
          await receiveDriveMode(id, carIcon, end, duration);
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
