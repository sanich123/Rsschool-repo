/* eslint-disable linebreak-style */
import { controlsMaker, tilesMaker, frameChangers } from '../utils/node-makers';

export default function InitProject() {
  let count = 0;
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', controlsMaker());
  body.insertAdjacentHTML('beforeend', tilesMaker());
  body.insertAdjacentHTML('beforeend', frameChangers());
  const counter = document.body.querySelector('.widgets__moves--value');
  if (localStorage.getItem('savedData')) {
    count = Number(JSON.parse(localStorage.getItem('savedData')).moves);
    counter.textContent = count;
  } else {
    counter.textContent = count;
  }

  const tilesList = document.body.querySelector('.tiles-list');
  const shuffleBtn = document.body.querySelector('.shuffle__btn');
  const saveBtn = document.body.querySelector('.save__btn');

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
      count += 1;
      counter.textContent = count;
      emptyEl.classList.remove('tiles-list__item--empty');
      emptyEl.classList.add('tiles-list__item');
      emptyEl.textContent = e.target.textContent;
      e.target.classList.remove('tiles-list__item');
      e.target.classList.add('tiles-list__item--empty');
      e.target.textContent = '0';
    }
  });
  shuffleBtn.addEventListener('click', () => {
    document.body.innerHTML = '';
    localStorage.clear();
    InitProject();
  });
  saveBtn.addEventListener('click', () => {
    const moves = counter.textContent;
    const stringifiedNodes = new XMLSerializer().serializeToString(tilesList);
    localStorage.setItem('savedData', JSON.stringify({
      tiles: stringifiedNodes,
      moves,
    }));
  });
}
