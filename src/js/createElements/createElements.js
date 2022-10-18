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
${[...Array(15).keys()].sort(() => 0.5 - Math.random()).map((number) => `<li class="tiles-list__item">${number}</li>`).join('')}
</ul>
`)