import { createFooter } from "../layout-makers/create-footer";
import { createHeader } from "../layout-makers/create-header";
import { startRu, startUs } from "../utils/const";
import { createGamePage } from "../create-game/create-game";
import { getNavLinks } from "../layout-makers/get-nav-links";
import { getRightCongratulations } from "../utils/helpers";

export function createResults(totalScore) {
  const innerLang = localStorage.getItem('language');
    const maxScore = 30;
    const message = getRightCongratulations(totalScore, maxScore, innerLang);
    const body = document.querySelector('.page');
    body.innerHTML = '';
    body.innerHTML = `${createHeader(innerLang)}<main class="page__main main">
      <div class="promo">
        <p class="promo__results">${message}</p>
        <button class="promo__btn">${innerLang === 'ru' ? startRu : startUs}</button>
      </div>
    </main>${createFooter(innerLang)}
    `;
    getNavLinks();
    const value = document.querySelector('.score__value');
    value.textContent = totalScore;
    const gameBtn = document.querySelector('.promo__btn');
    gameBtn.addEventListener('click', () => {
    createGamePage();
  });
}