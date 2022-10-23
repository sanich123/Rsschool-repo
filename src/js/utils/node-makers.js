/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

import { storageData } from './const';

/* eslint-disable linebreak-style */
export const controlsMaker = () => `
<div class="wrapper">
<div class="controls">
<button type="button" class="shuffle__btn">Start new</button>
<button type="button" class="stop__btn">Pause</button>
<button type="button" class="save__btn">Save</button>
<button type="button" class="results__btn">Results</button>
</div>
<ol class="results"></ol>
<div class="notifications"></div>
<div class="widgets">
<span class="widgets__moves">Moves</span>
<span class="widgets__moves--value"></span>
<span class="widgets__time">Time</span>
<span class="widgets__time--value">
<span class="minutes"></span>:
<span class="seconds"></span>
</span>
</div>
</div>
`;

function rowCollsMaker(n = 4) {
  let result = '';
  // const arr = [...Array(n * n).keys()].sort(() => 0.5 - Math.random());
  const arr = [...Array(n * n - 1).keys()].map((el) => el + 1);
  arr.push(0);

  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    const isEmpty = arr[i] === 0 ? 'tiles-list__item--empty' : 'tiles-list__item';
    if (j === +n) {
      j = 0;
    }
    result += `<li class=${isEmpty} data-row=${Math.floor(i / n) + 1} data-col=${j + 1} data-last=${j === n - 1} data-first=${j === 0}>${arr[i]}</li>`;
  }
  return result;
}

export const tilesMaker = (cols) => {
  if (localStorage.getItem(storageData)) {
    return JSON.parse(localStorage.getItem(storageData)).tiles;
  }
  return `<ul class="tiles-list">${rowCollsMaker(cols)}</ul>`;
};

export const frameChangers = () => (`
  <div class="size__wrapper">
  <div class="frame-description__wrapper">
  <span class="frame-description">Frame size</span>
  <span class="frame-value">4 * 4</span>
  </div>
  <span class="frame-btns__description">Other sizes</span>
  <div class="frame-btns__wrapper">
  <ul class="frame-size__btns">
  ${[3, 4, 5, 6, 7, 8].map((el) => `<button type="button" class="frame-size__btn" value=${el}>${el}*${el}</button>`).join('')}
  </ul>
  </div>
  </div>
  `);
