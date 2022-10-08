import { reviews } from "./const.js";
import { createComments } from "./utils/create-comments.js";

const commentsList = document.querySelector(".testimonials-list");
const rangeStick = document.querySelector(".testimonials__range");
const desktop = "(min-width: 1600px)";
const modal = document.querySelector(".modal");

let numberOfCards;
let sliceNumber = 0;

if (window.matchMedia(desktop).matches) {
  numberOfCards = 4;
} else {
  numberOfCards = 3;
}

rangeStick.addEventListener("change", ({ target }) => {
  sliceNumber = Number(target.value);
  commentsList.classList.add("slide-left");
  createComments(reviews, target.value, numberOfCards);
  setInterval(() => commentsList.classList.remove("slide-left"), 500);
});

window.addEventListener("resize", () => {
  if (window.matchMedia(desktop).matches) {
    createComments(reviews, sliceNumber, 4);
    numberOfCards = 4;
  } else {
    createComments(reviews, sliceNumber, 3);
    numberOfCards = 3;
  }
});

createComments(reviews, sliceNumber, numberOfCards);

[...document.querySelectorAll(".testimonials-list__item")].forEach((review) => {
  review.addEventListener("click", (evt) => {
    modal.style.display = "block";
    evt.currentTarget.classList.add("visible");
    document.querySelector(".visible .visible__btn").style.display = "block";
  });
});
const closeBtns = document.querySelectorAll(".visible__btn");

[...closeBtns].forEach((btn) => {
  btn.addEventListener("click", () => {

    [...document.querySelectorAll(".testimonials-list__item")].forEach(
      (review) => {
        if (review.classList.contains("visible")) {
          review.classList.remove('visible');
        }
      }
    );
  });
});
