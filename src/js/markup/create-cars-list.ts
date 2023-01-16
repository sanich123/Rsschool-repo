import { BTNS_VALUES } from "../utils/const";
import { CarsType } from "../utils/types";
import { createCarIcon, createFinishFlagIcon } from "./create-icons";
import { createPagination } from "./create-pagination";
import { startStopBtns } from "./start-stop-form";

export function createCarsList(carsList: CarsType[], paginatedData: CarsType[], amountPages: number) {

  return `<section class="cars">
        <h2 class="cars__amount">IN GARAGE: ${carsList.length} cars</h2>
        ${createPagination(amountPages)}
        <ul class="cars-list">
        ${paginatedData.slice().sort((a, b) => b.id - a.id).map(({ name, color, id }) => `<li class="cars-list__item list-item">
          ${BTNS_VALUES.map((type) => `<button class="list-item__btn" name="${type}-btn" value="${id}">${type.toUpperCase()}</button>`).join('')}
            <div class="list-item__name">${name}</div>
            ${createCarIcon(color)}
            ${startStopBtns()}
            ${createFinishFlagIcon()}
          </li>`).join('')}
        </ul>
      </section>`;
}
