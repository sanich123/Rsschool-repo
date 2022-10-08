import { pets } from "../const.js";

const cards = document.querySelector(".animals-list");

export function shufflePets(arr) {
  cards.innerHTML = "";

  return arr.forEach(({ title, srcset, src, alt, b, p, svg, turnOff }) =>
    cards.insertAdjacentHTML(
      "afterbegin",
      `
      <li class="animals-list__item ${turnOff ? "turn-off" : ""}">
        <div class="img__wrapper" data-title="${title}">
          <picture>
            <source
            srcset=${srcset}
            media="(min-width: 640px) and (max-width: 1599px)">
            <img src=${src} alt="${alt}">
          </picture>
        </div>
        <div class="animal-description__wrapper">
          <b>${b}</b>
          <p>${p}</p>
          ${svg}
        </div>
      </li>
    `
    )
  );
}

shufflePets(pets);
