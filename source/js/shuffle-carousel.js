import {pets, currentLocation, initialLocation, mainPage} from '../js/const.js';

function shufflePets(arr) {
  const cards = document.querySelector(".animals-list");
  if (cards) {
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
  } else {
    return;
  }
}

if (currentLocation.includes(mainPage) || initialLocation === '/') {

  const cards = document.querySelector(".animals-list");
  const rightBtn = document.querySelector(".cards__btn-right");
  const leftBtn = document.querySelector(".cards__btn-left");
  shufflePets(pets);

  rightBtn.addEventListener("click", () => {
    cards.classList.add("slide-right");
    const shuffled = pets.slice().sort(() => 0.5 - Math.random());
    shufflePets(shuffled);
    setTimeout(() => cards.classList.remove("slide-right"), 500);
  });

  leftBtn.addEventListener("click", () => {
    cards.classList.add("slide-left");
    const shuffled = pets.slice().sort(() => 0.5 - Math.random());
    shufflePets(shuffled);
    setTimeout(() => cards.classList.remove("slide-left"), 500);
  });
}
