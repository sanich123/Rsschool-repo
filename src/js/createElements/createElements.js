/* eslint-disable linebreak-style */
import { controlsMaker, tilesMaker, frameChangers } from '../utils/node-makers';

const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', controlsMaker());
body.insertAdjacentHTML('beforeend', tilesMaker());
body.insertAdjacentHTML('beforeend', frameChangers());

const tilesList = document.body.querySelector('.tiles-list');

tilesList.addEventListener('click', (e) => {
  const emptyEl = document.querySelector('.tiles-list__item--empty');
  const emptyRow = Number(emptyEl.dataset.row);
  const emptyIndex = Number(emptyEl.dataset.col);
  const currentRow = +e.target.dataset.row;
  const currentCol = +e.target.dataset.col;
  const isUp = currentRow === emptyRow - 1 && emptyIndex === currentCol;
  const isDown = currentRow === emptyRow + 1 && emptyIndex === currentCol;
  const isNext = e.target.dataset.first === 'false' && e.target === emptyEl.nextSibling;
  const isPrevious = e.target.dataset.last === 'false' && e.target === emptyEl.previousSibling;

  if (isUp || isDown || isPrevious || isNext) {
    emptyEl.classList.remove('tiles-list__item--empty');
    emptyEl.classList.add('tiles-list__item');
    emptyEl.textContent = e.target.textContent;
    e.target.classList.remove('tiles-list__item');
    e.target.classList.add('tiles-list__item--empty');
    e.target.textContent = '0';
  }
});
