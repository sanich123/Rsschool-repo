import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from "../layout-makers/create-header.js";
import { createGamePage } from "../create-game/create-game.js";
import { createStartMain } from '../layout-makers/create-start-main.js';
import { getNavLinks } from "../layout-makers/get-nav-links.js";
import morningTheme from '../../audio/grig-morning.mp3';
import { PATHS, LOCAL_STORAGE_KEYS } from "../utils/const.js";

export function createStartPage() {
  const innerLang = localStorage.getItem(LOCAL_STORAGE_KEYS.language);
  const body = document.querySelector(".page");
  body.innerHTML = "";
  body.insertAdjacentHTML("afterbegin", `${createHeader(innerLang)}${createStartMain(innerLang)}${createFooter(innerLang)}`);

  getNavLinks(innerLang);

  const gameBtn = document.querySelector('.promo__btn');
  document.querySelector('video').play();
  const audio = new Audio(morningTheme);
  audio.play();

  window.history.pushState({ urlPath: PATHS.main }, '', PATHS.main);
  gameBtn.addEventListener('click', () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
    window.history.pushState({ urlPath: PATHS.game }, '', PATHS.game);
    audio.pause();
    createGamePage();
  });
}
