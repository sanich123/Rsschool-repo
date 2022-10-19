/* eslint-disable linebreak-style */
const body = document.querySelector('body');

body.insertAdjacentHTML(
  'afterbegin',
  `
<div class="wrapper">
<div class="controls">
<button type="button">Shuffle and start</button>
<button type="button">Stop</button>
<button type="button">Save</button>
<button type="button">Results</button>
</div>
<div class="widgets">
<span class="widgets__moves">Moves</span>
<span class="widgets__moves--value"></span>
<span class="widgets__time">Time</span>
<span class="widgets__time--value"></span>
</div>
</div>
`,
);

body.insertAdjacentHTML('beforeend', `
<ul class="tiles-list">
${[...Array(16).keys()].sort(() => 0.5 - Math.random()).map((number) => `<li class="tiles-list__item">${number}</li>`).join('')}
</ul>
`);
const tiles = document.querySelectorAll('.tiles-list__item');
[...tiles].map((tile) => {
  if (tile.textContent === '0') {
    tile.classList.add('empty');
  }
  return tile;
});
body.insertAdjacentHTML('beforeend', `
  <div class="size__wrapper">
  <div class="frame-description__wrapper">
  <span class="frame-description">Frame size</span>
  <span class="frame-value">4 * 4</span>
  </div>
  <span class="frame-btns__description">Other sizes</span>
  <div class="frame-btns__wrapper">
  <button type="button" class="frame-size__btn">3 * 3</button>
  <button type="button" class="frame-size__btn">4 * 4</button>
  <button type="button" class="frame-size__btn">5 * 5</button>
  <button type="button" class="frame-size__btn">6 * 6</button>
  <button type="button" class="frame-size__btn">7 * 7</button>
  <button type="button" class="frame-size__btn">8 * 8</button>
  </div>
  </div>
`);
