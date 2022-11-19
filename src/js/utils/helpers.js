import successSound from "../../audio/success.mp3";
import failSound from "../../audio/fail.mp3";
import { categories, categoriesUs, congratulationsEn, congratulationsRu } from "./const";

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

export function addActiveToNavigation(innerCounter, innerLang) {
  const categoriesList = document.querySelectorAll(".categories-list__btn");
  const isRu = innerLang === 'ru';
  const categoriesMocks = isRu ? categories : categoriesUs;
  categoriesList.forEach((category) => {
    if (category.value === categoriesMocks[innerCounter]) {
      category.style.background = "red";
    }
  });
}

export function getSeconds(secs) {
  const mins = Math.trunc(Math.floor(secs) / 60);
  const seconds = Math.floor(secs - (mins * 60));
  return `${mins > 9 ? mins : `0${mins}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
}

function changeLanguageOnAnswers(data1, data2, string) {
    const namesRu = data1.map(([{name}]) => name);
    const namesEn = data2.map(([{name}]) => name);
    for (let i = 0; i < namesRu.length; i++) {
       string = string.replace(new RegExp(`${namesRu[i]}`, 'gi'), namesEn[i]);
    }
    return string;
}

export function getRightCongratulations(totalScore, maxScore, innerLang) {
  const isRu = innerLang === 'ru';
  if (totalScore === maxScore) {
      if (isRu) {
        return congratulationsRu;
      } else {
        return congratulationsEn;
      }
  } else {
    if (isRu) {
      return `Вы набрали ${totalScore} баллов. Судя по всему, вам надо немножко еще потренироваться определять разных птичек. Сыграем еще раз? Жмякай кнопку ниже, если хочешь еще разок`;
    } else {
      return `You have collected ${totalScore} points. Apparently, you need to practice a little more to identify different birds. Shall we play again? Click the button below if you want more`
    }
  }
}
