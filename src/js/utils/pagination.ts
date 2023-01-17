import {
  DEFAULT_AMOUNT_OF_ITEMS,
  DEFAULT_AMOUNT_OF_ITEMS_WINNERS,
  INITIAL_NUMBER_PAGE,
  ROUTES,
} from "./const";
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
