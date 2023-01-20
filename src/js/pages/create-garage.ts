import { createCarsList } from "../markup/create-cars-list";
import { createColorName } from "../markup/create-color-name";
import { createHeader } from "../markup/create-header";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { BTN_VALUES, LS_KEYS, MILLISECONDS_IN_SECONDS, PAGINATION_BTNS, ROUTES } from "../utils/const";
import { createCar, createWinner, deleteCar, deleteWinner, getCars, getWinner, getWinners, receiveDriveMode, sendCars, startEngine, updateCar, updateWinner } from "../utils/async-functions";
import { CarsType, TopSpeeds } from "../utils/types";
import { getRandomCarsColors, setRightPage } from "../utils/utils";
import { getPaginatedData } from "../utils/pagination";
import { applyToLocalStorage, getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { getLengthOfParentContainer } from "../utils/animations";
import { getIdNodes } from "../nodes/get-nodes-by-id";
import { disableNodes, enableNodes } from "../nodes/actions-with-nodes";

export default async function CreateGarage(carsList = []) {
  const body = document.querySelector(".page") as HTMLBodyElement;
  setDefaultPageToLocalStorage(carsList.length);
  const pageNumber = getFromLocalStorage(LS_KEYS.pageNumber);
  const { paginatedData, amountPages } = getPaginatedData(carsList, pageNumber);
  setRightPage(pageNumber, amountPages);

  body.innerHTML = `<main class="page-main">${createHeader()}${createColorName()}${createCarsList(carsList, paginatedData as CarsType[], amountPages)}</main>`;
  const { createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateColorInput, updateNameInput, updateCarBtn, raceResetGenerateBtns, paginationBtns, raceBtn, startStopBtns, generateCarsBtn, resetCarsBtn, selectDeleteBtns, stopBtns, garageLink, winnersLink } = getGarageNodes();
  garageLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.garage);
    getCars();
  });
  winnersLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.winners);
    getWinners();
  });

  raceBtn?.addEventListener('click', async () => {
    disableNodes(generateCarsBtn, resetCarsBtn, startStopBtns, selectDeleteBtns)
    const topSpeeds: TopSpeeds[] = [];
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
    const currentTimeSecs = currentTime / MILLISECONDS_IN_SECONDS;
    if (!winnerInfo?.response.ok) {
      await createWinner({ id, time: currentTimeSecs, wins: 1 });
    } else {
      const {id: availableId, wins: availableWins, time: availableTime} = winnerInfo?.data;
      if (availableTime > currentTimeSecs) {
        await updateWinner(availableId, { wins: availableWins + 1, time: currentTimeSecs })
      }
    }
    const winnersListItem = document.querySelector(`.list-item-${id}`) as HTMLLIElement;
    const winnersMessage = document.querySelector(`.winners-message-${id}`) as HTMLDivElement;
    winnersListItem.style.border = '5px solid red';
    winnersMessage.textContent = `The car with id ${id} and result ${currentTimeSecs}s have just won the race! Конгратулатионс!`
    enableNodes(generateCarsBtn, resetCarsBtn, startStopBtns, selectDeleteBtns);
  });
  createCarForm?.addEventListener('input', ({target}) => {
    if (target instanceof HTMLInputElement) {
      const { value, name } = target;
      if (name === 'create-car-name') applyToLocalStorage(LS_KEYS.createCarValue, value);
      if (name === 'create-car-color') applyToLocalStorage(LS_KEYS.createCarColor, value); 
    }
  });
  createCarForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { value: name } = createNameInput;
    const { value: color } = createColorInput;
    if (name) {
      await createCar({ name, color });
      getCars();
    }
  });
  carsListListener?.addEventListener("click", async ({ target }) => {
      if (target instanceof HTMLButtonElement) {
      const { name, value: id } = target;
      if (name.includes(BTN_VALUES.delete)) {
        await deleteCar(id);
        await deleteWinner(+id);
        getCars();
      }
        if (name.includes(BTN_VALUES.select)) {
        updateCarBtn.value = id;
        const [{ name }] = carsList.filter((car: CarsType) => car.id === Number(id));
        updateNameInput.value = name;
      }
      if (name.includes('start-stop')) {
        const { value } = target;
        const id = value.replace(/[a-z-]/gi, '');
        const { stopBtn, startBtn, carIcon } = getIdNodes(id);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        if (value.includes('start')) {
          const end = getLengthOfParentContainer();
          const { velocity, distance } = await startEngine(id);
          const duration = Math.floor(distance / velocity);
          await receiveDriveMode(id, carIcon, end, duration);
        }
      }
    }
  });
  updateCarForm?.addEventListener('input', ({ target }) => {
    if (target instanceof HTMLInputElement) {
      const { value, name } = target;
      if (name === 'update-car-name') applyToLocalStorage(LS_KEYS.updateCarValue, value);
      if (name === 'update-car-color') applyToLocalStorage(LS_KEYS.updateCarColor, value);      
    }
  });
  updateCarForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { value: name } = updateNameInput;
    const { value: color } = updateColorInput;
    const { value: id } = updateCarBtn;
    if (name) {
      await updateCar({ name, color }, id);
      getCars();
    }
  });
  raceResetGenerateBtns?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { name } = target;
      if (name === "generate") await sendCars(getRandomCarsColors());
      if (name === 'reset') {
        const cars = document.querySelectorAll('.car-icon') as NodeListOf<HTMLElement>;
        cars.forEach((car) => car.style.transform = 'translateX(0)');
        stopBtns.forEach((btn) => btn.disabled = true);
      }
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
