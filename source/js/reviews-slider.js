import { reviews } from "./const.js";

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

function createComments(arr, slicedNumber, numberOfCards) {
  commentsList.innerHTML = "";

  arr
    .slice(Number(slicedNumber), Number(slicedNumber) + numberOfCards)
    .forEach(({ img, alt, b, location, time, comment }) =>
      commentsList.insertAdjacentHTML(
        "beforeend",
        `<li class="testimonials-list__item">
        <div class="person__wrapper">
          <img src=${img} alt=${alt} width="37px" height="37px">
          <b>${b}</b>
          <div class="person__location">
            <span>${location}</span>
            <span>${time}</span>
          </div>
        </div>
        <div class="person__comment">
          <span>${comment}</span>
        </div>
        <button type="button" class="visible__btn" aria-label="Закрыть отзыв">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#333B41"/>
            <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#333B41"/>
          </svg>
        </button>
      </li>
      `
      )
    );
  [...document.querySelectorAll(".testimonials-list__item")].forEach(
    (review) => {
      review.addEventListener("click", (evt) => {
        modal.style.display = "block";
        evt.currentTarget.classList.add("visible");
        document.querySelector(".visible .visible__btn").style.display =
          "block";
        document.body.style.overflow = "hidden";
      });
    }
  );
  const closeBtns = document.querySelectorAll(".visible__btn");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
      document.querySelector(".visible__btn").style.display = "none";
    });
  })
}

createComments(reviews, sliceNumber, numberOfCards);
