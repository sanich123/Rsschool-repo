import { DEFAULT_AMOUNT_OF_ITEMS, INITIAL_NUMBER_PAGE, LS_KEYS, ROUTES } from "./const";

export function applyToLocalStorage(key: string, data: number) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}

export function setDefaultPageToLocalStorage(length: number) {
    const location = window.location.href;
    const isGarage = location.includes(ROUTES.garage) || !location.includes('#');
    if (length < DEFAULT_AMOUNT_OF_ITEMS) {
        isGarage ? localStorage.removeItem(LS_KEYS.pageNumber) : localStorage.removeItem(LS_KEYS.pageNumberWinners);
    }
    if (!localStorage.getItem(LS_KEYS.pageNumber)) {
        isGarage ? applyToLocalStorage(LS_KEYS.pageNumber, INITIAL_NUMBER_PAGE) : applyToLocalStorage(LS_KEYS.pageNumberWinners, INITIAL_NUMBER_PAGE);
    }
}