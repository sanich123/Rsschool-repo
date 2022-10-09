import { pets } from "../const.js";
const currentLocation = window.location.href.slice(22);
export function shufflePets(arr) {
  const cards = document.querySelector(".animals-list");
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
if (currentLocation === "index.html") {
  shufflePets(pets);
}
