/* eslint-disable linebreak-style */
import { controlsMaker, tilesMaker, frameChangers } from '../utils/node-makers';

export default function createElements(colsForInnerNeeds) {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('afterbegin', controlsMaker());
  body.insertAdjacentHTML('beforeend', tilesMaker(colsForInnerNeeds));
  body.insertAdjacentHTML('beforeend', frameChangers());

  const tilesList = document.body.querySelector('.tiles-list');
  const tiles = document.body.querySelectorAll('.tiles-list__item');
  const emptyTile = document.body.querySelectorAll('.tiles-list__item--empty');
  const nodes = [...tiles, ...emptyTile];
  const shuffleBtn = document.body.querySelector('.shuffle__btn');
  const saveBtn = document.body.querySelector('.save__btn');
  const stopBtn = document.body.querySelector('.stop__btn');
  const resultsBtn = document.body.querySelector('.results__btn');
  const muteBtn = document.querySelector('.mute__btn');
  const minutesBlock = document.body.querySelector('.minutes');
  const secondsBlock = document.body.querySelector('.seconds');
  const counter = document.body.querySelector('.widgets__moves--value');
  const notifications = document.body.querySelector('.notifications');
  const results = document.querySelector('.results');
  const frameSizeControls = document.body.querySelector('.frame-size__btns');
  const showFramePanel = document.body.querySelector('.frame-value');
  return {
    tilesList,
    tiles,
    emptyTile,
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
  };
}
