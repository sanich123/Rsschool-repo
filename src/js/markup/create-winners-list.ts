import { CarsType, WinnersType } from "../utils/types";
import { createCarIcon } from "./create-icons";

export function createWinnersList(
  winners: WinnersType[] = [],
  cars: CarsType[] = []
) {
  return `<secion class="winners">
    <ul class="winners-list">
    <li class="winners-list__item">
    <div class="winners-list-item__number">Number</div>
    <div class="winners-list-item__car">Car</div>
    <div class="winners-list-item__name">Name</div>
    <div class="winners-list-item__wins-count">Wins</div>
    <div class="winners-list-item__time">Best-time</div>
    ${winners
      .map(({ wins, time, id }, index) => {
        const [{ name, color }] = cars.filter((car) => car.id === id);
        return `<li class="winners-list__item" id="${id}">
    <div class="winners-list-item__number">${++index}</div>
    <div class="winners-list-item__car">${createCarIcon(color)}</div>
    <div class="winners-list-item__name">${name}</div>
    <div class="winners-list-item__wins-count">${wins}</div>
    <div class="winners-list-item__time">${time}</div>`;
      })
      .join("")}
    </li>
    </ul>
    </section>`;
}
