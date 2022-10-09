const currentLocation = window.location.href.slice(22);
const donatePage = 'donate.html';
const navLinks = document.querySelectorAll('.nav-list__item a')

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

