import { createFooter } from "../layout-makers/create-footer";
import { createHeader } from "../layout-makers/create-header";
import { startRu } from "../utils/const";
import { createGamePage } from "../create-game/create-game";
import { getNavLinks } from "../layout-makers/get-nav-links";

export function createResults(totalScore) {
    const maxScore = 30;
    const message = totalScore === maxScore ? 'Очень поздравляем! Вы набрали максимальное количество баллов! Судя по всему, кукушка и дятел для вас не пустые слова! Не думаю, что вам захочется сыграть еще разок:(' : `Вы набрали ${totalScore} баллов. Судя по всему, вам надо немножко еще потренироваться определять разных птичек. Сыграем еще раз? Жмякай кнопку ниже, если хочешь еще разок`
    const body = document.querySelector('.page');
    body.innerHTML = '';
    body.innerHTML = `${createHeader()}<main class="page__main main">
      <div class="promo">
        <p class="promo__results">${message}</p>
        <button class="promo__btn">${startRu}</button>
      </div>
    </main>${createFooter()}
    `;
    getNavLinks();
    const value = document.querySelector('.score__value');
    value.textContent = totalScore;
    const gameBtn = document.querySelector('.promo__btn');
    gameBtn.addEventListener('click', () => {
    createGamePage();
  });
}