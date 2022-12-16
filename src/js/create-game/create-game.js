import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from "../layout-makers/create-header.js";
import { createMainGame } from "../layout-makers/create-game-main.js";
import { addActiveToNavigation, getRandomNumber, setDeclineAcceptStyles } from "../utils/helpers.js";
import { createResults } from "../create-results/create-results.js";
import { setAudio } from "../manage-audio/manage-audio.js";
import { getNavLinks } from "../layout-makers/get-nav-links.js";
import { LANGUAGES, LAST_GROUP, LOCAL_STORAGE_KEYS, MAX_GAP_SCORE, MIN_COUNTER, PATHS } from "../utils/const.js";
import { BIRDS_DATA_RU, BIRDS_DATA_EN } from "../utils/mocks.js";
import { router } from "../utils/router.js";

export function createGamePage(counter = MIN_COUNTER, arr = BIRDS_DATA_RU, checkedAnswer = "", question = {name: ''}, score = MAX_GAP_SCORE, total = 0) {
  let innerCounter = counter;
  let innerChecked = checkedAnswer;
  let innerQuestionBird;
  let innerTotalScore = total;
  let innerScore = score;
  const innerLang = localStorage.getItem(LOCAL_STORAGE_KEYS.language);
  innerLang === LANGUAGES.ru ? arr = BIRDS_DATA_RU : arr = BIRDS_DATA_EN;
  
  const filtredBirds = arr[counter];

  if (!question.name) {
    innerQuestionBird = filtredBirds[getRandomNumber(filtredBirds.length)];
  } else {
    innerQuestionBird = question;
  }

  const checkedData = filtredBirds.filter(({ name }) => name === innerChecked);
  const body = document.querySelector(".page");
  body.innerHTML = "";
  body.insertAdjacentHTML("afterbegin", `
  ${createHeader(innerLang)}
  ${createMainGame(filtredBirds, checkedData, innerQuestionBird, innerChecked, innerLang, innerCounter)}
  ${createFooter(innerLang)}`);

  addActiveToNavigation(innerCounter, innerLang);
  setDeclineAcceptStyles(checkedAnswer, innerQuestionBird);
  setAudio();

  const scoreMark = document.querySelector(".score__value");

  if (checkedAnswer === innerQuestionBird.name) {
    if (!innerScore) {
      scoreMark.textContent = innerTotalScore;
      if (innerCounter === LAST_GROUP) {
        window.history.pushState({ urlPath: PATHS.results }, '', PATHS.results);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
        createResults(innerTotalScore);
        return;
      }
    } else {
      innerTotalScore = innerTotalScore + ++innerScore;
      scoreMark.textContent = innerTotalScore;
      if (innerCounter === LAST_GROUP) {
        window.history.pushState({ urlPath: PATHS.results }, '', PATHS.results);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
        createResults(innerTotalScore);
        return;
      }
    }
  } else {
    scoreMark.textContent = innerTotalScore;
  }

  getNavLinks(innerLang, innerCounter, innerChecked, innerQuestionBird, innerScore, innerTotalScore);

  const nextBtn = document.querySelector(".next-btn");
  const answersList = document.querySelector(".answers-list");
  const langBtn = document.querySelector('.nav-list__btn--svg');
  langBtn.disabled = true;
  langBtn.style.opacity = '0.5';


  answersList.addEventListener("click", ({ target }) => {
    if (!target.disabled && target.tagName !== 'UL') {
      if (innerScore > 0) {
        createGamePage(innerCounter, BIRDS_DATA_RU, target.value, innerQuestionBird, --innerScore, innerTotalScore);
      } else {
        createGamePage(innerCounter, BIRDS_DATA_RU, target.value, innerQuestionBird, innerScore, innerTotalScore);
      }
    }
  });

  nextBtn.addEventListener("click", () => {
    const nextCounter = innerCounter + 1;
    localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
    createGamePage(nextCounter, BIRDS_DATA_RU, "", { name: '' }, MAX_GAP_SCORE, innerTotalScore);
  });
  window.addEventListener('hashchange', (event) => {
    const indexHash = event.newURL.indexOf('#');
    const newUrl = event.newURL.slice(indexHash);
    window.history.pushState({ urlPath: newUrl }, '', newUrl);
    router(newUrl);
  });
}
