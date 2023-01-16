import { CAR_ICON_HEIGHT_SMALL, CAR_ICON_WIDTH_SMALL } from "../utils/const";
import { CarsType, WinnersType } from "../utils/types";
import { getSearchParams } from "../utils/utils";
import { createCarIcon, createAscendingIcon, createDescendingIcon } from "./create-icons";

export function createWinnersList(winners: WinnersType[] = [], cars: CarsType[] = []) {
  const { sortOrder } = getSearchParams();
  const ascDescToggler = sortOrder === 'ASC' ? 'DESC' : 'ASC';
  const iconToggler = sortOrder === 'ASC' ? createAscendingIcon() : createDescendingIcon();
  return `<secion class="winners">
    <ul class="winners-list">

    <li class="winners-list__item">
    <div class="winners-list-item__number">Number</div>
    <div class="winners-list-item__car">Car</div>
    <div class="winners-list-item__name">Name</div>
    <button class="winners-list-item__wins-count" type="button" value="${ascDescToggler}">Wins ${iconToggler}</button>
    <button class="winners-list-item__time" type="button" value="${ascDescToggler}">Best-time ${iconToggler}</button>
    </li>
    ${winners.map(({ wins, time, id }, index) => {
        const [{ name, color }] = cars.filter((car) => car.id === id);
        return `<li class="winners-list__item" id="${id}">
    <div class="winners-list-item__number">${++index}</div>
    <div class="winners-list-item__car">${createCarIcon(color, CAR_ICON_WIDTH_SMALL, CAR_ICON_HEIGHT_SMALL)}</div>
    <div class="winners-list-item__name">${name}</div>
    <div class="winners-list-item__wins-count">${wins}</div>
    <div class="winners-list-item__time">${time}</div></li>`;
      }).join("")}

    </ul>
    </section>`;
}
