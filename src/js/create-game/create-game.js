import { birdsData } from "../utils/mocks.js";
import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from "../layout-makers/create-header.js";
import { createMainGame } from "../layout-makers/create-game-main.js";
import {
  addActiveToNavigation,
  getRandomNumber,
  setDeclineAcceptStyles,
} from "../utils/helpers.js";
import { createResults } from "../create-results/create-results.js";

export function createGamePage(
  counter = 0,
  arr = birdsData,
  checkedAnswer = "",
  question = "",
  score = 5,
  total = 0
) {
  let innerCounter = counter;
  let innerChecked = checkedAnswer;
  let innerQuestionBird;
  let innerTotalScore = total;
  let innerScore = score;

  const filtredBirds = arr[counter];
  !question
    ? (innerQuestionBird = filtredBirds[getRandomNumber(filtredBirds.length)])
    : (innerQuestionBird = question);

  const checkedData = filtredBirds.filter(({ name }) => name === innerChecked);
  const body = document.querySelector(".page");
  body.innerHTML = "";

  body.insertAdjacentHTML(
    "afterbegin",
    `${createHeader()}${createMainGame(
      filtredBirds,
      checkedData,
      innerQuestionBird,
      innerChecked
    )}${createFooter()}`
  );
  addActiveToNavigation(innerCounter);
  setDeclineAcceptStyles(checkedAnswer, innerQuestionBird);

  const scoreMark = document.querySelector(".score__value");
  if (checkedAnswer === innerQuestionBird.name) {
    if (!innerScore) {
      scoreMark.textContent = innerTotalScore;
    } else {
      innerTotalScore = innerTotalScore + ++innerScore;
      scoreMark.textContent = innerTotalScore;
      console.log(innerCounter);
      if (innerCounter === 5) {
        
        window.history.pushState({urlPath: 'results.html'}, '', 'results.html');
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
        createGamePage(
          innerCounter,
          birdsData,
          target.value,
          innerQuestionBird,
          --innerScore,
          innerTotalScore
        );
      } else {
        createGamePage(
          innerCounter,
          birdsData,
          target.value,
          innerQuestionBird,
          innerScore,
          innerTotalScore
        );
      }
    }
  });

  nextBtn.addEventListener("click", () => {
    const nextCounter = innerCounter + 1;
    createGamePage(nextCounter, birdsData, "", null, 5, innerTotalScore);
  }
  );
}
