import successSound from "../../audio/success.mp3";
import failSound from "../../audio/fail.mp3";
import { categories } from "./const";

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export function setDeclineAcceptStyles(checkedAnswer, innerQuestionBird) {

  const answersList = document.querySelector('.answers-list');
  const answersBtns = document.querySelectorAll(".answers-list__btn");
  const fail = new Audio(failSound);
  const success = new Audio(successSound);
  const body = document.querySelector(".page");
  if (checkedAnswer === innerQuestionBird.name) {
    answersBtns.forEach((btn) => {
      if (btn.value === innerQuestionBird.name) {
        success.play();
        body.style.background = "green";
        btn.classList.add("accept");
        setTimeout(() => (body.style.background = "#ebe2e2"), 50);
      } else {
        btn.disabled = true;
      }
    });
  } else {
    answersBtns.forEach((btn) => {
      if (btn.value === checkedAnswer) {
        fail.play();
        body.style.background = "orange";
        btn.classList.add("decline");
        btn.disabled = true;
        setTimeout(() => (body.style.background = "#ebe2e2"), 50);
      }
    });
  }

  const stringifiedNodes = new XMLSerializer().serializeToString(answersList);

 localStorage.setItem('answers', JSON.stringify(stringifiedNodes));
}

export function addActiveToNavigation(innerCounter) {
  const categoriesList = document.querySelectorAll(".categories-list__btn");
  categoriesList.forEach((category) => {
    if (category.value === categories[innerCounter]) {
      category.style.background = "red";
    }
  });
}

export function getSeconds(secs) {
  const mins = Math.trunc(Math.floor(secs) / 60);
  const seconds = Math.floor(secs - (mins * 60));
  return `${mins > 9 ? mins : `0${mins}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
}
