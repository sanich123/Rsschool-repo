import { createFooter } from "../layout-makers/create-footer";
import { createHeader } from "../layout-makers/create-header";
import { createGamePage } from "../create-game/create-game";
import { getNavLinks } from "../layout-makers/get-nav-links";
import { getRightCongratulations } from "../utils/helpers";
import {
  START_RU,
  START_US,
  MAX_SCORE,
  LOCAL_STORAGE_KEYS,
  PATHS,
  LANGUAGES,
} from "../utils/const";
import { router } from "../utils/router";

export function createResults(totalScore) {
  const innerLang = localStorage.getItem(LOCAL_STORAGE_KEYS.language);
  const message = getRightCongratulations(totalScore, MAX_SCORE, innerLang);
  const body = document.querySelector(".page");
  body.innerHTML = "";
  body.innerHTML = `
  ${createHeader(innerLang)}
  <main class="page__main main">
  <div class="promo">
  <p class="promo__results">${message}</p>
  <button class="promo__btn">${
    innerLang === LANGUAGES.ru ? START_RU : START_US
  }</button>
  </div>
  </main>${createFooter(innerLang)}`;
  getNavLinks(innerLang, "", "", "", "", totalScore);
  const value = document.querySelector(".score__value");
  value.textContent = totalScore;
  const gameBtn = document.querySelector(".promo__btn");
  gameBtn.addEventListener("click", () => {
    window.history.pushState({ urlPath: PATHS.game }, "", PATHS.game);
    createGamePage();
  });
  window.addEventListener('hashchange', (event) => {
    const indexHash = event.newURL.indexOf('#');
    const newUrl = event.newURL.slice(indexHash);
    window.history.pushState({ urlPath: newUrl }, '', newUrl);
    router(newUrl);
  });
}
