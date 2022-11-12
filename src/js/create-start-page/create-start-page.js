import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from "../layout-makers/create-header.js";
import { createGamePage } from "../create-game/create-game.js";
import { createStartMain } from '../layout-makers/create-start-main.js';
import morningTheme from '../../audio/grig-morning.mp3';

export function createStartPage() {
  const body = document.querySelector(".page");
  body.innerHTML = "";
  body.insertAdjacentHTML("afterbegin", `${createHeader()}${createStartMain()}${createFooter()}`);

  const mainPage = document.querySelector('.nav-list__item a[href="index.html"]');
  const gamePage = document.querySelector('.nav-list__item a[href="game.html"]');
  const gameBtn = document.querySelector('.promo__btn');
  const video = document.querySelector('video');
  video.autoplay = true;
  const morningPlay = new Audio(morningTheme);
  // morningPlay.play();

  gameBtn.addEventListener('click', () => {
    window.history.pushState({urlPath: 'game.html'}, '', 'game.html');
    createGamePage();
  });

  mainPage.addEventListener("click", () => createStartPage);
  gamePage.addEventListener('click', () => createGamePage);

}
