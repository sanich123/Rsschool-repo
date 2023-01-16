import { createHeader } from "../markup/create-header";
import { createPagination } from "../markup/create-pagination";
import { createWinnersList } from "../markup/create-winners-list";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { LS_KEYS, PAGINATION_BTNS } from "../utils/const";
import { applyToLocalStorage, getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { getPaginatedData } from "../utils/pagination";
import { hashListener } from "../utils/router";
import { CarsType, WinnersType } from "../utils/types";

export default function CreateWinners(winners: WinnersType[] = [], cars: CarsType[] = []) {
    setDefaultPageToLocalStorage(winners.length);
    const { paginatedData, amountPages } = getPaginatedData(winners, getFromLocalStorage(LS_KEYS.pageNumberWinners));
    const body = document.querySelector('.page') as HTMLBodyElement;
    body.innerHTML = `<main class="page-main">
    ${createHeader()}
    ${createPagination(amountPages)}
    ${createWinnersList(paginatedData as WinnersType[], cars)}</main>`;
    const {  paginationBtns } = getGarageNodes();
    paginationBtns?.addEventListener("click", ({ target }) => {
        if (target instanceof HTMLButtonElement) {
            const { value } = target;
            const numberOfPage = Number(getFromLocalStorage(LS_KEYS.pageNumberWinners));
            if (value === PAGINATION_BTNS.next) applyToLocalStorage(LS_KEYS.pageNumberWinners, numberOfPage + 1);
            if (value === PAGINATION_BTNS.previous) applyToLocalStorage(LS_KEYS.pageNumberWinners, numberOfPage - 1);
            CreateWinners(winners, getFromLocalStorage(LS_KEYS.cars));
        }
    });
    hashListener();
}