import { birdsData, birdsDataEn } from "../utils/mocks.js";
import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from "../layout-makers/create-header.js";
import { createMainGame } from "../layout-makers/create-game-main.js";
import { addActiveToNavigation, getRandomNumber, setDeclineAcceptStyles } from "../utils/helpers.js";
import { createResults } from "../create-results/create-results.js";
import { setAudio } from "../manage-audio/manage-audio.js";
import { getNavLinks } from "../layout-makers/get-nav-links.js";

export function createGamePage(counter = 0, arr = birdsData, checkedAnswer = "", question = "", score = 5, total = 0, lang = 'ru') {
  let innerCounter = counter;
  let innerChecked = checkedAnswer;
  let innerQuestionBird;
  let innerTotalScore = total;
  let innerScore = score;
  const innerLang = localStorage.getItem('language');
  innerLang === 'ru' ? arr = birdsData : arr = birdsDataEn;
  
  const filtredBirds = arr[counter];
  !question
    ? (innerQuestionBird = filtredBirds[getRandomNumber(filtredBirds.length)])
    : (innerQuestionBird = question);

  const checkedData = filtredBirds.filter(({ name }) => name === innerChecked);
  const body = document.querySelector(".page");
  body.innerHTML = "";

  body.insertAdjacentHTML("afterbegin", `${createHeader(innerLang)}${createMainGame(filtredBirds, checkedData, innerQuestionBird, innerChecked, innerLang)}${createFooter(innerLang)}`);
  addActiveToNavigation(innerCounter);
  setDeclineAcceptStyles(checkedAnswer, innerQuestionBird);
  setAudio();
  getNavLinks();

  const scoreMark = document.querySelector(".score__value");
  if (checkedAnswer === innerQuestionBird.name) {
    if (!innerScore) {
      scoreMark.textContent = innerTotalScore;
    } else {
      innerTotalScore = innerTotalScore + ++innerScore;
      scoreMark.textContent = innerTotalScore;
      if (innerCounter === 5) {
        localStorage.removeItem('answers');
        createResults(innerTotalScore);
        return;
      }
    }
  } else {
    scoreMark.textContent = innerTotalScore;
  }

  const nextBtn = document.querySelector(".next-btn");
  const answersList = document.querySelector(".answers-list");

  answersList.addEventListener("click", ({ target }) => {
    if (!target.disabled) {
      if (innerScore > 0) {
        createGamePage(innerCounter, birdsData, target.value, innerQuestionBird, --innerScore, innerTotalScore);
      } else {
        createGamePage(innerCounter, birdsData, target.value, innerQuestionBird, innerScore, innerTotalScore);
      }
    }
  });

  nextBtn.addEventListener("click", () => {
    const nextCounter = innerCounter + 1;
    localStorage.removeItem('answers');
    createGamePage(nextCounter, birdsData, "", null, 5, innerTotalScore);
  });
}
