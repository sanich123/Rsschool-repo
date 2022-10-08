import { pets } from "../js/const.js";
import { shufflePets } from "./utils/shuffle-pets.js";

const cards = document.querySelector(".animals-list");
const rightBtn = document.querySelector(".cards__btn-right");
const leftBtn = document.querySelector(".cards__btn-left");

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


