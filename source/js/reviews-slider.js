
import { reviews, currentLocation, mainPage, desktopWidth } from "./const.js";
import { createComments } from "./utils/create-comments.js";

if (currentLocation === mainPage) {
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
    } else {
      createComments(reviews, sliceNumber, 3);
      numberOfCards = 3;
    }
  });

  createComments(reviews, sliceNumber, numberOfCards);
  const comments = document.querySelectorAll(".testimonials-list__item");
  [...comments].map(
    (review) => {
      review.addEventListener("click", (evt) => {
        modal.style.display = "block";
        evt.currentTarget.classList.add("visible");
        document.querySelector(".visible .visible__btn").style.display =
          "block";
      });
    }
  );
  const closeBtns = document.querySelectorAll(".visible__btn");

  [...closeBtns].map((btn) => {
    btn.addEventListener("click", () => {
      const comments = document.querySelectorAll('.testimonials-list__item');
      let visibleReview = [...comments].filter((review) => review.classList.contains('visible'));
      visibleReview.classList.remove('visible');
    });
  });
}
