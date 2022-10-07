import { reviews } from "./const.js";

const commentsList = document.querySelector(".testimonials-list");
const rangeStick = document.querySelector(".testimonials__range");
const desktop ='(min-width: 1600px)';

let numberOfCards;
let sliceNumber = 0;

if (window.matchMedia(desktop).matches) {
  numberOfCards = 4;
} else {
  numberOfCards = 3;
}

rangeStick.addEventListener('change', ({target}) => {
  sliceNumber = Number(target.value);
  commentsList.classList.add('slide-left');
  createComments(reviews, target.value, numberOfCards);
  setInterval(() => commentsList.classList.remove('slide-left'), 500);
})

window.addEventListener('resize', () => {
  if (window.matchMedia(desktop).matches) {
    createComments(reviews, sliceNumber, 4);
    numberOfCards = 4;
  } else {
    createComments(reviews, sliceNumber, 3);
    numberOfCards = 3;
  }
})

function createComments(arr, slicedNumber, numberOfCards){
  commentsList.innerHTML = "";

  return arr
  .slice(Number(slicedNumber), Number(slicedNumber) + numberOfCards)
  .forEach(({ img, alt, b, location, time, comment }) => commentsList.insertAdjacentHTML(
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
      </li>
      `
    )
  )
}

createComments(reviews, sliceNumber, numberOfCards);
