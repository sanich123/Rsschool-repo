import { currentLocation, mainPage, donatePage } from "./const.js";

const navLinks = document.querySelectorAll('.nav-list__item a')
const footerLinks = document.querySelectorAll('.footer-nav-list__item a');

for (let i = 0; i < navLinks.length; i++) {
  const current = navLinks[i];
  if (currentLocation === donatePage) {
      if (current.innerHTML === 'Donate') {
        current.classList.add('active');
      } else {
        current.classList.remove('active');
      }
    }
  }

