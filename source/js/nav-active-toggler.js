const navLinks = document.querySelectorAll('.nav-list__item a')
const footerLinks = document.querySelectorAll('.footer-nav-list__item a');
const index = 'index.html';
const donate = 'donate.html';
const currentLocation = window.location.href.slice(22);

for (let i = 0; i < navLinks.length; i++) {
  const current = navLinks[i];
  if (currentLocation === donate) {
      if (current.innerHTML === 'Donate') {
        current.classList.add('active');
      } else {
        current.classList.remove('active');
      }
    }
  }

