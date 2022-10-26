/* eslint-disable linebreak-style */
import {
  newGame,
  storageData,
  continueGame,
  defaultValue,
  almostTablet,
  rightToLeft,
  bottomToTop,
  leftToRight,
  topToBottom,
  resultsData,
  saveLocalStorageSuccess,
  nonSolved,
  switchSound,
  muteSound,
  maxMobile,
} from '../utils/const';
import { zeroAdder, widthChanger, checkRightness } from '../utils/utils';
import soundFile from '../../audio/listing-page.mp3';
import createElements from './createElements';

export default function CreateGame(isStarting, cols, currentWidth) {
  let fromLocalStorage = !!localStorage.getItem(storageData);
  let continueTimer = false;
  let isMuted = false;
  let colsForInnerNeeds = cols;
  const innerStarting = isStarting;

  const body = document.querySelector('body');
  const {
    tilesList,
    nodes,
    shuffleBtn,
    saveBtn,
    stopBtn,
    resultsBtn,
    muteBtn,
    minutesBlock,
    secondsBlock,
    counter,
    notifications,
    results,
    frameSizeControls,
    showFramePanel,
  } = createElements(colsForInnerNeeds);

  let count = 0;
  let minutes = 0;
  let seconds = 0;
  let interval;

  notifications.innerHTML = checkRightness(nodes.map((el) => +el.innerHTML));
  setTimeout(() => { notifications.innerHTML = ''; }, 2000);

  showFramePanel.innerHTML = `${colsForInnerNeeds} * ${colsForInnerNeeds}`;
  tilesList.style.gridTemplateColumns = `repeat(${colsForInnerNeeds}, auto)`;

  widthChanger(nodes, currentWidth, colsForInnerNeeds);
  minutesBlock.innerHTML = zeroAdder(minutes);
  secondsBlock.innerHTML = zeroAdder(seconds);
  counter.textContent = count;
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
  if (isStarting === defaultValue) {
    tilesList.style.opacity = 0.5;
    stopBtn.disabled = true;
    saveBtn.disabled = true;
    resultsBtn.disabled = true;
  }
  if (fromLocalStorage) {
    const {
      moves, mins, secs, columns,
    } = JSON.parse(localStorage.getItem(storageData));
    count = Number(moves);
    seconds = secs;
    minutes = mins;
    counter.textContent = count;
    widthChanger(nodes, currentWidth, columns);
    secondsBlock.innerHTML = zeroAdder(secs);
    minutesBlock.innerHTML = zeroAdder(mins);
    colsForInnerNeeds = columns;
    showFramePanel.innerHTML = `${colsForInnerNeeds} * ${colsForInnerNeeds}`;
    tilesList.style.gridTemplateColumns = `repeat(${colsForInnerNeeds}, auto)`;
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
    if (isStarting !== defaultValue) {
      if (!isMuted) {
        const audio = new Audio(soundFile);
        audio.play();
      }
      const emptyEl = document.querySelector('.tiles-list__item--empty');
      const emptyRow = Number(emptyEl.dataset.row);
      const emptyIndex = Number(emptyEl.dataset.col);
      const currentRow = +e.target.dataset.row;
      const currentCol = +e.target.dataset.col;
      const isUp = currentRow === emptyRow - 1 && emptyIndex === currentCol;
      const isDown = currentRow === emptyRow + 1 && emptyIndex === currentCol;
      const isNext = e.target.dataset.first === 'false' && e.target === emptyEl.nextSibling;
      const isPrevious = e.target.dataset.last === 'false' && e.target === emptyEl.previousSibling;
      let animation;
      if (isUp || isDown || isPrevious || isNext) {
        count += 1;
        counter.textContent = count;
        if (isDown) animation = bottomToTop;
        if (isUp) animation = topToBottom;
        if (isNext) animation = rightToLeft;
        if (isPrevious) animation = leftToRight;
        e.target.classList.add(animation);
        setTimeout(() => {
          emptyEl.classList.remove('tiles-list__item--empty');
          emptyEl.classList.add('tiles-list__item');
          emptyEl.textContent = e.target.textContent;
          e.target.classList.remove('tiles-list__item');
          e.target.classList.add('tiles-list__item--empty');
          e.target.textContent = '0';
        }, 500);
      }
      setTimeout(() => nodes.forEach((node) => {
        if (node.classList.contains(animation)) {
          node.classList.remove(animation);
        }
      }), 1000);
      const solution = `${[...Array(colsForInnerNeeds * colsForInnerNeeds).keys()].slice(1).join('')}0`;

      setTimeout(() => {
        const currentState = [...tilesList.children].slice().map((node) => (node.innerHTML)).join('');
        if (solution === currentState) {
          notifications.textContent = `Hooray! You solved the puzzle in ${minutes} minutes :${seconds} seconds and ${count} moves!`;
          const result = { minutes, seconds, count };
          if (!localStorage.getItem(resultsData)) {
            localStorage.setItem(resultsData, JSON.stringify([result]));
          } else {
            const arr = JSON.parse(localStorage.getItem(resultsData));
            arr.push(result);
            localStorage.setItem(resultsData, JSON.stringify(arr));
          }
        }
      }, 600);
    }
  });
  shuffleBtn.addEventListener('click', () => {
    if (fromLocalStorage) {
      document.body.innerHTML = '';
      CreateGame(continueGame, colsForInnerNeeds, document.documentElement.clientWidth);
    } else {
      document.body.innerHTML = '';
      localStorage.removeItem(storageData);
      CreateGame(newGame, colsForInnerNeeds, document.documentElement.clientWidth);
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
      columns: cols,
    }));
    notifications.innerHTML = saveLocalStorageSuccess;
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
  frameSizeControls.addEventListener('click', (e) => {
    const width = document.documentElement.clientWidth;
    body.innerHTML = '';
    CreateGame(defaultValue, e.target.value, width);
  });
  resultsBtn.addEventListener('click', () => {
    if (localStorage.getItem(resultsData)) {
      const arr = JSON.parse(localStorage.getItem(resultsData));
      const lis = arr.map((item) => `<li>${item.minutes} min : ${item.seconds} sec, ${item.count} moves</li>`).join('');
      results.innerHTML = '';
      results.insertAdjacentHTML('afterbegin', lis);
      setTimeout(() => { results.innerHTML = ''; }, 2000);
    } else {
      results.innerHTML = nonSolved;
      setTimeout(() => { results.innerHTML = ''; }, 2000);
    }
  });
  muteBtn.addEventListener('click', () => {
    if (!isMuted) {
      isMuted = true;
      muteBtn.innerHTML = switchSound;
    } else {
      isMuted = false;
      muteBtn.innerHTML = muteSound;
    }
  });

  function handleMobileWidth(e) {
    if (e.matches && currentWidth > maxMobile) {
      body.innerHTML = '';
      CreateGame(innerStarting, colsForInnerNeeds, document.documentElement.clientWidth);
    }
  }

  const mobileWidth = window.matchMedia(almostTablet);
  const tabletWidth = window.matchMedia('(min-width: 768px)');
  tabletWidth.addListener((e) => {
    if (e.matches) {
      body.innerHTML = '';
      CreateGame(innerStarting, colsForInnerNeeds, document.documentElement.clientWidth);
    }
  });
  mobileWidth.addListener(handleMobileWidth);
  handleMobileWidth(mobileWidth);
}
