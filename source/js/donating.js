import { currentLocation, donatePage } from "./const.js";

const amountBtns = document.querySelector(".price-list");
const amountNumber = document.querySelector(".input__number");
const btns = document.querySelectorAll(".amount-input");
const liNodes = document.querySelectorAll(".price-list__item");
const mistakeShower = document.querySelector(".mistake__shower");

if (currentLocation.includes(donatePage)) {
  amountBtns.addEventListener("click", (evt) => {
    amountNumber.value = evt.target.value;
    [...liNodes].map((node) => {
      if (node.classList.contains("orange")) {
        node.classList.remove("orange");
      }
    });
    evt.target.parentNode.parentNode.classList.add("orange");
  });

  amountNumber.addEventListener("input", (evt) => {
    [...liNodes].map((node) => {
      if (node.classList.contains("orange")) {
        node.classList.remove("orange");
      }
    });
    [...btns].map((btn) => {
      if (btn.value === evt.target.value) {
        btn.parentNode.parentNode.classList.add("orange");
        btn.checked = true;
      }
    });
    const numValue = Number(evt.target.value);
    const min = Number(evt.target.min);
    const max = Number(evt.target.max);
    if (numValue > max || numValue < min) {
      evt.target.value = "";
      mistakeShower.textContent = `Не стоит даже пытаться ввести число больше ${max} и меньше ${min}`;
      mistakeShower.style.color = "red";
      setTimeout(() => (mistakeShower.textContent = ""), 1000);
    }
    if (evt.target.value[0] === "0") {
      mistakeShower.textContent = `Малыш, чисел с первым нулем нет в природе, не балуйся`;
      setTimeout(() => (mistakeShower.textContent = ""), 1000);
      evt.target.value = "";
    }
    if (evt.target.value[0] === "-" && evt.target.value[1] === "0") {
      mistakeShower.textContent = `-0 тоже не бывает, херачь по другому`;
      setTimeout(() => (mistakeShower.textContent = ""), 1000);
      evt.target.value = "";
    }
  });
  amountNumber.addEventListener("focus", (evt) => {
    evt.target.value = "";
  });
}
