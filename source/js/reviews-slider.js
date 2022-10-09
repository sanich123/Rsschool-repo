import {
  reviews,
  currentLocation,
  mainPage,
  desktopWidth,
  initialLocation,
  almostSmallDesktopWidth,
  smallDesktopWidth,
} from "./const.js";
import { createComments } from "./utils/create-comments.js";

if (currentLocation === mainPage || initialLocation === "/") {
  const commentsList = document.querySelector(".testimonials-list");
  const rangeStick = document.querySelector(".testimonials__range");
  const modal = document.querySelector(".modal");

  let numberOfCards;
  let sliceNumber = 0;

  if (window.matchMedia(desktopWidth).matches) {
    numberOfCards = 4;
  } else {
    numberOfCards = 3;
  }
  createComments(reviews, sliceNumber, numberOfCards);
  rangeStick.addEventListener("change", ({ target }) => {
    sliceNumber = Number(target.value);
    commentsList.classList.add("slide-left");
    createComments(reviews, target.value, numberOfCards);
    setInterval(() => commentsList.classList.remove("slide-left"), 500);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia(desktopWidth).matches) {
      createComments(reviews, sliceNumber, 4);
      numberOfCards = 4;
    }
    if (window.matchMedia(smallDesktopWidth)) {
      createComments(reviews, sliceNumber, 3);
      numberOfCards = 3;
    }
    if (window.matchMedia(almostSmallDesktopWidth).matches) {
      createComments(reviews, sliceNumber, 3);
      numberOfCards = 3;
      [...document.querySelectorAll(".testimonials-list__item")].map(
        (review) => {
          review.addEventListener("click", (evt) => {
            modal.style.display = "block";
            evt.currentTarget.classList.add("visible");
            document.querySelector(".visible .visible__btn").style.display =
              "block";
          });
        }
      );

      [...document.querySelectorAll(".visible__btn")].map((btn) => {
        btn.addEventListener("click", (evt) => {
          // evt.target.parentNode.parentNode.parentNode.classList.remove('visible');
          // createComments(reviews, sliceNumber, 3);
        });
      });
    }
  });

  if (window.matchMedia(almostSmallDesktopWidth).matches) {
    [...document.querySelectorAll(".testimonials-list__item")].map((review) => {
      review.addEventListener("click", (evt) => {
        modal.style.display = "block";
        evt.currentTarget.classList.add("visible");
        document.querySelector(".visible .visible__btn").style.display =
          "block";
      });
    });

    [...document.querySelectorAll(".visible__btn")].map((btn) => {
      btn.addEventListener("click", (evt) => {
        // evt.target.parentNode.parentNode.parentNode.classList.remove('visible');
        // createComments(reviews, sliceNumber, 3);
      });
    });
  }
}
