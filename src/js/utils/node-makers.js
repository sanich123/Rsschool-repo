/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export const controlsMaker = () => `
<div class="wrapper">
<div class="controls">
<button type="button" class="shuffle__btn">Shuffle and start</button>
<button type="button" class="stop__btn">Stop</button>
<button type="button" class="save__btn">Save</button>
<button type="button">Results</button>
</div>
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

function rowCollsMaker() {
  let result = '';
  const arr = [...Array(16).keys()].sort(() => 0.5 - Math.random());

  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    const isEmpty = arr[i] === 0 ? 'tiles-list__item--empty' : 'tiles-list__item';
    if (j === 4) {
      j = 0;
    }
    result += `<li class=${isEmpty} data-row=${Math.floor(i / 4) + 1} data-col=${j + 1} data-last=${j === 3} data-first=${j === 0}>${arr[i]}</li>`;
  }
  return result;
}

export const tilesMaker = () => {
  if (localStorage.getItem('savedData')) {
    return JSON.parse(localStorage.getItem('savedData')).tiles;
  }
  return `<ul class="tiles-list">${rowCollsMaker()}</ul>`;
};

export const frameChangers = () => (`
  <div class="size__wrapper">
  <div class="frame-description__wrapper">
  <span class="frame-description">Frame size</span>
  <span class="frame-value">4 * 4</span>
  </div>
  <span class="frame-btns__description">Other sizes</span>
  <div class="frame-btns__wrapper">
  <button type="button" class="frame-size__btn" value="3">3*3</button>
  <button type="button" class="frame-size__btn" value="4">4*4</button>
  <button type="button" class="frame-size__btn" value="5">5*5</button>
  <button type="button" class="frame-size__btn" value="6">6*6</button>
  <button type="button" class="frame-size__btn" value="7">7*7</button>
  <button type="button" class="frame-size__btn" value="8">8*8</button>
  </div>
  </div>
  `);
