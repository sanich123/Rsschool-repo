/* eslint-disable linebreak-style */
import { controlsMaker, tilesMaker, frameChangers } from '../utils/node-makers';
import { newGame, storageData, continueGame } from '../utils/const';
import { zeroAdder } from '../utils/utils';

export default function InitProject(isStarting) {
  let fromLocalStorage = !!localStorage.getItem(storageData);
  let continueTimer = false;

  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', controlsMaker());
  body.insertAdjacentHTML('beforeend', tilesMaker());
  body.insertAdjacentHTML('beforeend', frameChangers());

  const tilesList = document.body.querySelector('.tiles-list');
  const shuffleBtn = document.body.querySelector('.shuffle__btn');
  const saveBtn = document.body.querySelector('.save__btn');
  const stopBtn = document.body.querySelector('.stop__btn');
  const minutesBlock = document.body.querySelector('.minutes');
  const secondsBlock = document.body.querySelector('.seconds');
  const counter = document.body.querySelector('.widgets__moves--value');
  const notifications = document.body.querySelector('.notifications');

  let count = 0;
  let minutes = 0;
  let seconds = 0;
  let interval;
  function timer() {
    interval = setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      minutesBlock.innerHTML = zeroAdder(minutes);
      secondsBlock.innerHTML = zeroAdder(seconds);
    }, 1000);
  }
  minutesBlock.innerHTML = zeroAdder(minutes);
  secondsBlock.innerHTML = zeroAdder(seconds);
  counter.textContent = count;

  if (fromLocalStorage) {
    const { moves, mins, secs } = JSON.parse(localStorage.getItem(storageData));
    count = +moves;
    seconds = secs;
    minutes = mins;
    counter.textContent = count;
    secondsBlock.innerHTML = zeroAdder(secs);
    minutesBlock.innerHTML = zeroAdder(mins);
    shuffleBtn.textContent = 'Continue';
  }

  if (isStarting === newGame || isStarting === continueGame) {
    timer();
  }
  if (isStarting === continueGame) {
    shuffleBtn.innerHTML = 'Start new';
    fromLocalStorage = false;
  }

  tilesList.addEventListener('click', (e) => {
    if (isStarting === newGame || isStarting === continueGame) {
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
    }
  });
  shuffleBtn.addEventListener('click', () => {
    if (fromLocalStorage) {
      document.body.innerHTML = '';
      InitProject(continueGame);
    } else {
      document.body.innerHTML = '';
      localStorage.clear();
      InitProject(newGame);
    }
  });
  saveBtn.addEventListener('click', () => {
    const moves = counter.textContent;
    const stringifiedNodes = new XMLSerializer().serializeToString(tilesList);
    localStorage.setItem(storageData, JSON.stringify({
      tiles: stringifiedNodes,
      moves,
      secs: seconds,
      mins: minutes,
    }));
    notifications.innerHTML = 'The data was successfully saved';
    setTimeout(() => { notifications.innerHTML = ''; }, 1000);
  });
  stopBtn.addEventListener('click', () => {
    if (continueTimer) {
      stopBtn.innerHTML = 'Pause';
      continueTimer = false;
      clearInterval(interval);
      timer();
    } else {
      clearInterval(interval);
      stopBtn.innerHTML = 'Continue';
      continueTimer = true;
    }
  });
}
