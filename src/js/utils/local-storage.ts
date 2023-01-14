import { DEFAULT_AMOUNT_OF_ITEMS, INITIAL_NUMBER_PAGE, LS_KEYS } from "./const";

export function applyToLocalStorage(key: string, data: number) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}

export function setDefaultPageToLocalStorage(length: number) {
    if (length < DEFAULT_AMOUNT_OF_ITEMS) {
        localStorage.removeItem(LS_KEYS.pageNumber);
    }
    if (!localStorage.getItem(LS_KEYS.pageNumber)) {
        applyToLocalStorage(LS_KEYS.pageNumber, INITIAL_NUMBER_PAGE);
    }
}