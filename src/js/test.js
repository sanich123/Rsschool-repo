/* eslint-disable linebreak-style */

import soundFile from '../audio/listing-page.mp3';

const p = document.querySelector('p');
const audio = new Audio(soundFile);
p.addEventListener('click', () => {
  audio.play();
});
