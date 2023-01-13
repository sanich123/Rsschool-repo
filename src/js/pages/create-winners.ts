import { createHeader } from "../markup/create-header";
import { createWinnersList } from "../markup/create-winners-list";
import { hashListener } from "../utils/router";
import { CarsType, WinnersType } from "../utils/types";

export default function CreateWinners(winners: WinnersType[] = [], cars: CarsType[] = []) {
    
    const body = document.querySelector('.page') as HTMLBodyElement;
    body.innerHTML = `<main class="page-main">${createHeader()}${createWinnersList(winners, cars)}</main>`;
    hashListener();
}