import sound from '../audio/listing-page.mp3';

const p = document.querySelector('p');
const audio = new Audio(sound);

p.addEventListener('click', () => {
  audio.play();
});
