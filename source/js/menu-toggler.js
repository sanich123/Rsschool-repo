const burgerBtn = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__close-btn");
const headerWrapper = document.querySelector(".another__wrapper");
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");

burgerBtn.addEventListener("click", () => {
  header.classList.add("open--menu");
  header.classList.remove("header");
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  header.classList.add("header");
  modal.style.display = "none";
  header.classList.remove("open--menu");
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
  header.classList.add("header");
  header.classList.remove("open--menu");
});
