import { DEFAULT_AMOUNT_OF_ITEMS, INITIAL_NUMBER_PAGE } from "./const";
import { CarsType, WinnersType } from "./types";

export function getPaginatedData(cartItems: CarsType[] | WinnersType[], page?: number, amount?: number) {
    const safeAmount = amount || DEFAULT_AMOUNT_OF_ITEMS;
    const safePage = page || INITIAL_NUMBER_PAGE;
    const amountPages = Math.ceil(cartItems.length / safeAmount);
    const start = (safePage - 1) * safeAmount;
    const last = start + safeAmount;
    const paginatedData = cartItems.slice(start, last);
    return { amountPages, paginatedData }
}