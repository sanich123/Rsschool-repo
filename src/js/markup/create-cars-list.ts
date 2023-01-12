import { CarsType } from "../utils/types";
import { createCarIcon, createFinishFlagIcon } from "./create-icons";
import { createPagination } from "./create-pagination";
import { startStopBtns } from "./start-stop-form";

export function createCarsList(carsList: CarsType[]) {
 
    return `<section class="cars">
        <h2 class="cars__amount">IN GARAGE: ${carsList.length} cars</h2>
        ${createPagination()}
        <ul class="cars-list">
        ${carsList.map(({name, color}) => `<li class="cars-list__item list-item">
          ${['select', 'delete'].map((type) => `<button class="list-item__btn" name="${type}-btn">${type.toUpperCase()}</button>`).join()}
            <div class="list-item__name">${name}</div>
            ${createCarIcon(color)}
            ${startStopBtns()}
            ${createFinishFlagIcon()}
          </li>`).join('')}

        </ul>
      </section>`;
}