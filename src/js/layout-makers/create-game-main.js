import { categories, nextBtnTextDefault, nextBtnTextSuccess, defaultText, categoriesUs } from "../utils/const.js";
import questionIcon from "../../img/svg/question-mark.svg";
import { createAudio } from "./create-audio.js";
import { createAnswers, createCategories } from "./create-categories.js";

export function createMainGame(filtredBirds, checkedData, questionBird, innerChecked, innerLang) {
  const localStorageAnswers = JSON.parse(localStorage.getItem('answers'));
  const answersVariants = createAnswers(filtredBirds);
  const categoriesList = innerLang === 'ru' ? createCategories(categories) : createCategories(categoriesUs);

  const { audio: questionAudio, name: questionName, image: questionImage } = questionBird;
  let answerLayout;
  if (checkedData.length > 0) {
    const [{ name, audio, image, description, species }] = checkedData;
    answerLayout = `<img src=${image} alt="" class="checked-answer__img" />
        <span class="checked-answer__surname">${name} (${species})</span>
        <p align="justify" class="checked-answer__description">${description}</p>${createAudio(audio, 'checked-answer')}`;
  } else {
    answerLayout = `<div></div><p class="checked-answer__default">${defaultText}</p>`;
  }
  const isMatching = innerChecked === questionName;

  return `<main class="game">
      <ul class="game__list categories-list">${categoriesList}</ul>
      <div class="game__question question">
        <img src=${isMatching ? questionImage : questionIcon} alt="${isMatching ? questionName : ''}" class="question__img" width="50px"/>
        <span class="question__name">${isMatching ? questionName : "**********"}</span>
      ${createAudio(questionAudio, 'question')}
      </div>
      ${localStorageAnswers ? localStorageAnswers : `${`<ul class="game__answers-list answers-list">${answersVariants}</ul>`}`}
      <div class="game__checked-answer checked-answer">${answerLayout}</div>
      <button class="game__next-btn next-btn" type="button" ${isMatching ? "" : "disabled"}>
        ${isMatching ? nextBtnTextSuccess : nextBtnTextDefault}
      </button>
    </main>`;
}
