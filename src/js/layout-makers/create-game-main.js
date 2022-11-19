import { categories, categoriesUs } from "../utils/const.js";
import questionIcon from "../../img/svg/question-mark.svg";
import { createAudio } from "./create-audio.js";
import { createAnswers, createCategories, createCheckedAnswerLayout, createCheckedAnswerDefault, createNextBtn } from "./create-categories.js";
import { birdsData, birdsDataEn } from "../utils/mocks.js";
import { changeLanguageOnAnswers } from "../utils/helpers.js";

export function createMainGame(filtredBirds, checkedData, questionBird, innerChecked, innerLang, innerCounter) {
  const isRu = innerLang === 'ru';
  const localStorageAnswers = JSON.parse(localStorage.getItem('answers'));
  const answersVariants = createAnswers(filtredBirds);
  const categoriesList = isRu ? createCategories(categories) : createCategories(categoriesUs);
  const { audio: questionAudio, name: questionName, image: questionImage } = questionBird;

  let answerLayout;

  checkedData.length > 0 ?
    answerLayout = createCheckedAnswerLayout(checkedData) :
    answerLayout = createCheckedAnswerDefault(innerLang);

  const isMatching = innerChecked === questionName;
  const isRefreshing = localStorageAnswers && localStorageAnswers.includes('accept');

  return `<main class="game">
      <ul class="game__list categories-list">${categoriesList}</ul>
      <div class="game__question question">
        <img src=${isMatching ? questionImage : questionIcon} alt="${isMatching ? questionName : ''}" class="question__img" width="50px"/>
        <span class="question__name">${isMatching ? questionName : "**********"}</span>
      ${createAudio(questionAudio, 'question')}
      </div>
      ${localStorageAnswers ? changeLanguageOnAnswers(isRu, innerCounter, birdsData, birdsDataEn, localStorageAnswers) : `${`<ul class="game__answers-list answers-list">${answersVariants}</ul>`}`}
      <div class="game__checked-answer checked-answer">${answerLayout}</div>
      <button class="game__next-btn next-btn" type="button" ${isMatching || isRefreshing ? "" : "disabled"}>
        ${createNextBtn(innerLang, isMatching)}
      </button>
    </main>`;
}
