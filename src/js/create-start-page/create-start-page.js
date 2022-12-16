import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from "../layout-makers/create-header.js";
import { createGamePage } from "../create-game/create-game.js";
import { createStartMain } from '../layout-makers/create-start-main.js';
import { getNavLinks } from "../layout-makers/get-nav-links.js";
import morningTheme from '../../audio/grig-morning.mp3';
import { PATHS, LOCAL_STORAGE_KEYS } from "../utils/const.js";
import { router } from "../utils/router.js";
import { getUrl } from "../utils/helpers.js";

export function createStartPage() {
  const location = window.location.href;
  const url = new URL(location).hash;
  const filtredParams = url.includes('?') ? url.slice(url.indexOf('?')) : '';

  const searchParams = new URLSearchParams(filtredParams);
  const result = {};
  for (let [key, value] of searchParams) {
    result[key] = value;
  }
  console.log(result);


  const innerLang = localStorage.getItem(LOCAL_STORAGE_KEYS.language);
  const body = document.querySelector(".page");
  body.innerHTML = "";
  body.insertAdjacentHTML("afterbegin", `${createHeader(innerLang)}${createStartMain(innerLang)}${createFooter(innerLang)}`);
  // const audio = new Audio(morningTheme);
  // audio.play();
  getNavLinks(innerLang);

  const gameBtn = document.querySelector('.promo__btn');
  document.querySelector('video').play();

  window.history.pushState({ urlPath: getUrl(location) }, '', getUrl(location));
  window.addEventListener('hashchange', (event) => {
    window.history.pushState({ urlPath: getUrl(event.newURL) }, '', getUrl(event.newURL));
    router(getUrl(event.newURL));
  });
  gameBtn.addEventListener('click', () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
    window.history.pushState({ urlPath: PATHS.game }, '', PATHS.game);
    // audio.pause();
    createGamePage();
  });
}
