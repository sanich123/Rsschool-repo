const burgerBtn = document.querySelector('.header__menu');
const header = document.querySelector('.header');
burgerBtn.addEventListener('click', () => {
  header.classList.add('open--menu');
})
