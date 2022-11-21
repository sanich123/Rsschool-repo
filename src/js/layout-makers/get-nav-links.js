import { createStartPage } from "../create-start-page/create-start-page";
import { createGamePage } from "../create-game/create-game";
import { createResults } from "../create-results/create-results";
import { createGalleryPage } from '../create-gallery/create-gallery';
import { getBirdNameOnAnotherLang } from "../utils/helpers";
import { RUS_FLAG, US_FLAG, LANGUAGES, NAV_LINKS_RU, NAV_LINKS_US, PATHS, LOCAL_STORAGE_KEYS } from "../utils/const";
import { BIRDS_DATA_EN, BIRDS_DATA_RU } from "../utils/mocks";

export function getNavLinks(language = LANGUAGES.ru, innerCounter, innerChecked, innerQuestionBird, innerScore, innerTotalScore) {
  const isRu = language === LANGUAGES.ru;
  const mainPage = document.querySelector(`.nav-list__btn--${isRu ? NAV_LINKS_RU[0] : NAV_LINKS_US[0]}`);
  const gamePage = document.querySelector(`.nav-list__btn--${isRu ? NAV_LINKS_RU[1] : NAV_LINKS_US[1]}`);
  const gallery = document.querySelector(`.nav-list__btn--${isRu ? NAV_LINKS_RU[2] : NAV_LINKS_US[2]}`);
  const lang = document.querySelector('.nav-list__btn--svg');
  lang.addEventListener('click', () => {
    const location = window.location.href;
    if (lang.innerHTML.includes('rus')) {
      lang.innerHTML = US_FLAG;
    } else {
      lang.innerHTML = RUS_FLAG;
    }
    const language = lang.innerHTML.includes('rus') ? LANGUAGES.ru : LANGUAGES.us;
    localStorage.setItem(LOCAL_STORAGE_KEYS.language, language);

    if (location.includes(PATHS.main)) {
      createStartPage(language);
    } else if (location.includes(PATHS.game)) {
      // if (innerQuestionBird.name) {
      //   innerQuestionBird.name = getBirdNameOnAnotherLang(BIRDS_DATA_RU, BIRDS_DATA_EN)[innerQuestionBird.name];
      // } 
      createGamePage(innerCounter, BIRDS_DATA_RU, innerChecked, innerQuestionBird, innerScore, innerTotalScore);
    } else if (location.includes(PATHS.results)) {
      createResults(innerTotalScore);
    } else if (location.includes(PATHS.gallery)) {
      createGalleryPage(innerCounter);
    }
  });
  mainPage.addEventListener("click", () => {
    window.history.pushState({ urlPath: PATHS.main }, '', PATHS.main);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
    createStartPage();
  });
  gamePage.addEventListener("click", () => {
    window.history.pushState({ urlPath: PATHS.game }, '', PATHS.game);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
    createGamePage();
  });

  gallery.addEventListener('click', () => {
    window.history.pushState({urlPath: PATHS.gallery}, '', PATHS.gallery);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
    createGalleryPage();
  })
}
