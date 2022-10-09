import { smallDesktopWidth } from "./const.js";
const burgerBtn = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__close-btn");
const headerWrapper = document.querySelector(".another__wrapper");
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");

burgerBtn.addEventListener("click", () => {
  header.classList.add("open--menu");
  header.classList.remove("header");
  modal.style.display = "block";
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  header.classList.add("header");
  modal.style.display = "none";
  header.classList.remove("open--menu");
  document.body.style.height = "";
  document.body.style.overflowY = "";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
  header.classList.add("header");
  header.classList.remove("open--menu");
  const activeReview = document.querySelector(".visible");
  const buttons = document.querySelectorAll(".visible__btn");
  if (activeReview) {
    activeReview.classList.remove("visible");
  }
  buttons.forEach((button) => (button.style.display = "none"));

  document.body.style.height = "";
  document.body.style.overflowY = "";
});

window.addEventListener("resize", () => {
  if (window.matchMedia(smallDesktopWidth).matches) {
    if (modal) {
      document.querySelector(".modal").style.display = "none";
      document.querySelector("header").classList.remove("open--menu");
      document.querySelector("header").classList.add("header");
      document.body.style.height = "";
      document.body.style.overflowY = "";
    }
  }
});
