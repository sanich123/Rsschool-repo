import { getIdNodes } from "../nodes/get-nodes-by-id";
import CreateGarage from "../pages/create-garage";
import { getLengthOfParentContainer } from "./animations";
import { createCar, createWinner, deleteCar, deleteWinner, getWinner, receiveDriveMode, sendCars, startEngine, updateCar, updateWinner } from "./async-functions";
import { BTN_VALUES, LS_KEYS, MILLISECONDS_IN_SECONDS, SEARCH_PARAMS } from "./const";
import { applyToLocalStorage } from "./local-storage";
import { CAR_BRANDS_MODELS } from "./mocks";
import Router from "./router";
import { CarsMocksType, CarsType, TopSpeeds } from "./types";

export function getRandomColor() {
  const red = Math.floor(Math.random() * 256).toString(16);
  const green = Math.floor(Math.random() * 256).toString(16);
  const blue = Math.floor(Math.random() * 256).toString(16);
  return `#${red}${green}${blue}`;
}
export function getRandomMember(array: CarsMocksType[]) {
  return array[Math.floor(array.length * Math.random())];
}

export function getRandomCarsColors() {
  return [...Array(100).keys()].map(() => {
    const { brand, models } = getRandomMember(CAR_BRANDS_MODELS);
    return { name: `${brand} ${models[Math.floor(models.length * Math.random())]}`, color: getRandomColor() };
  });
}

export function getSearchParams() {
  const location = window.location.href;
  const url = new URL(location).hash;
  const filtredParams = url.includes('?') ? url.slice(url.indexOf('?')) : '';
  const searchParams = new URLSearchParams(filtredParams);
  const sortType = searchParams.get(SEARCH_PARAMS.sort) || '';
  const sortOrder = searchParams.get(SEARCH_PARAMS.order) || '';
  return {
     sortType, sortOrder, searchParams,
  }
}

export function setRightPage(pageNumber: number, amountPages: number) {
  if (pageNumber > amountPages) {
    applyToLocalStorage(LS_KEYS.pageNumber, amountPages);
    CreateGarage();
  }
}

export async function generateResetCars(name: string, stopBtns: NodeListOf<HTMLButtonElement>) {
  if (name === "generate") await sendCars(getRandomCarsColors());
  if (name === 'reset') {
    const cars = document.querySelectorAll('.car-icon') as NodeListOf<HTMLElement>;
    cars.forEach((car) => car.style.transform = 'translateX(0)');
    stopBtns.forEach((btn) => btn.disabled = true);
  }
}

export async function updateCarFromForm(name: string, color: string, id: string) {
  await updateCar({ name, color }, id);
  Router();
}

export async function createCarFromForm(name: string, color: string) {
  await createCar({ name, color });
  Router();
}

export function updateCarNameColor(value: string, name: string) {
  if (name === 'update-car-name') {
    applyToLocalStorage(LS_KEYS.updateCarValue, value);
  }
  if (name === 'update-car-color') {
    applyToLocalStorage(LS_KEYS.updateCarColor, value);
  }
  if (name === 'create-car-name') {
    applyToLocalStorage(LS_KEYS.createCarValue, value);
  }
  if (name === 'create-car-color') {
    applyToLocalStorage(LS_KEYS.createCarColor, value);
  }
}

export async function deleteSelectCar(name: string, id: string, updateCarBtn: HTMLButtonElement, carsList: CarsType[], updateNameInput: HTMLInputElement) {
  if (name.includes(BTN_VALUES.delete)) {
    await deleteCar(id);
    await deleteWinner(+id);
    CreateGarage();
  }
  if (name.includes(BTN_VALUES.select)) {
    updateCarBtn.value = id;
    const [{ name }] = carsList.filter((car: CarsType) => car.id === Number(id));
    updateNameInput.value = name;
  }
}

export async function startCar(name: string, target: HTMLButtonElement) {
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

export async function getFinishedCars(paginatedData: CarsType[]) {
  const topSpeeds: TopSpeeds[] = [];
  const ids = paginatedData.map(({ id }) => id);
  const end = getLengthOfParentContainer();
  const speedDistances = await Promise.all(ids.map((id) => startEngine(`${id}`)));
  const finished = await Promise.all(speedDistances.map(async ({ velocity, distance }, i) => {
    const duration = Math.floor(distance / velocity);
    topSpeeds.push({ id: ids[i], duration });
    const carIcon = document.getElementById(`car-${ids[i]}`) as HTMLElement;
    return await receiveDriveMode(`${ids[i]}`, carIcon, end, duration);
  }));
  return {topSpeeds, finished}
}

export function getTopSpeedRacer(topSpeeds: TopSpeeds[], filterWastedCars: (number | undefined)[]) {
  const { id, duration: currentTime } = topSpeeds.filter(({ id }) => filterWastedCars.includes(id)).sort((a, b) => a.duration - b.duration)[0];
  return {id, currentTime};
}

export async function sendOrCreateWinner(id: number, currentTime: number) {
  const winnerInfo = await getWinner(id);
  const currentTimeSecs = currentTime / MILLISECONDS_IN_SECONDS;
  if (!winnerInfo?.response.ok) {
    await createWinner({ id, time: currentTimeSecs, wins: 1 });
  } else {
    const { id: availableId, wins: availableWins, time: availableTime } = winnerInfo?.data;
    if (availableTime > currentTimeSecs) {
      await updateWinner(availableId, { wins: availableWins + 1, time: currentTimeSecs })
    }
  }
}

export function createSuccessMessage(id: number, currentTime: number) {
  const {winnersListItem, winnersMessage } = getIdNodes(id.toString());
  winnersListItem.style.border = '5px solid red';
  winnersListItem.style.borderRadius = '5px';
  winnersMessage.textContent = `The car with id ${id} and result ${currentTime / MILLISECONDS_IN_SECONDS}s have just won the race! Конгратулатионс!`
}
