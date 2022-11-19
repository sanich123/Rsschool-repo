import { createStartPage } from "../create-start-page/create-start-page";
import { createGamePage } from "../create-game/create-game";
import { rusFlag, usFlag } from "../utils/const";
import { navLinksRu, navLinksUs } from "../utils/const";

export function getNavLinks(language = 'ru') {
  const isRu = language === 'ru';

  const mainPage = document.querySelector(`.nav-list__btn--${isRu ? navLinksRu[0] : navLinksUs[0]}`);
  const gamePage = document.querySelector(`.nav-list__btn--${isRu ? navLinksRu[1] : navLinksUs[1]}`);
  const gallery = document.querySelector(`.nav-list__btn--${isRu ? navLinksRu[2] : navLinksUs[2]}`);
  const lang = document.querySelector('.nav-list__btn--svg');
  lang.addEventListener('click', () => {
    const location = window.location.href;
    if (lang.innerHTML.includes('rus')) {
      lang.innerHTML = usFlag;
    } else {
      lang.innerHTML = rusFlag;
    }
    const language = lang.innerHTML.includes('rus') ? 'ru' : 'us';
    localStorage.setItem('language', language);

    if (location.includes('main')) {
      createStartPage(language);
    } else if (location.includes('game')) {
      createGamePage();
    }
    
  });
  mainPage.addEventListener("click", () => {
    window.history.pushState({urlPath: 'main'}, '', 'main');
    localStorage.removeItem("answers");
    createStartPage();
  });
  gamePage.addEventListener("click", () => {
    window.history.pushState({urlPath: 'game'}, '', 'game');
    localStorage.removeItem("answers");
    createGamePage();
  });
}
