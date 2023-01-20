import {
  DEFAULT_AMOUNT_OF_ITEMS,
  DEFAULT_AMOUNT_OF_ITEMS_WINNERS,
  INITIAL_NUMBER_PAGE,
  LS_KEYS,
  PAGINATION_BTNS,
  ROUTES,
} from "./const";
import { applyToLocalStorage, getFromLocalStorage } from "./local-storage";
import Router from "./router";
import { CarsType, WinnersType } from "./types";

export function getPaginatedData(
  items: CarsType[] | WinnersType[],
  page?: number,
  amount?: number
) {
  const location = window.location.href;
  const isGarage = location.includes(ROUTES.garage) || !location.includes("#");
  const safeAmount =
    amount || isGarage
      ? DEFAULT_AMOUNT_OF_ITEMS
      : DEFAULT_AMOUNT_OF_ITEMS_WINNERS;
  const safePage = page || INITIAL_NUMBER_PAGE;
  const amountPages = Math.ceil(items.length / safeAmount);
  const start = (safePage - 1) * safeAmount;
  const last = start + safeAmount;
  const paginatedData = items.slice(start, last);
  return { amountPages, paginatedData };
}

export function incrementDecrementPage(value: string) {
  const location = window.location.href;
  const rightPlace = location.includes(ROUTES.garage)
    ? LS_KEYS.pageNumber
    : LS_KEYS.pageNumberWinners;
  const numberOfPage = Number(getFromLocalStorage(rightPlace));
  if (value === PAGINATION_BTNS.next) {
    applyToLocalStorage(rightPlace, numberOfPage + 1);
  }
  if (value === PAGINATION_BTNS.previous) {
    applyToLocalStorage(rightPlace, numberOfPage - 1);
  }
  Router();
}
