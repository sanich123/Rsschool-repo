import { categories, nextBtnTextDefault, nextBtnTextSuccess, defaultText } from "../utils/const.js";
import questionIcon from "../../img/svg/question-mark.svg";
import { createAudio } from "./create-audio.js";

export function createMainGame(filtredBirds, checkedData, questionBird, innerChecked) {
  const answersVariants = filtredBirds.map(({ name }) => `<button class="answers-list__btn" value="${name}">${name}</button>`).join("");
  const categoriesList = categories.map((category) => `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`).join("");

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
      <ul class="game__answers-list answers-list">${answersVariants}</ul>
      <div class="game__checked-answer checked-answer">${answerLayout}</div>
      <button class="game__next-btn next-btn" type="button" ${isMatching ? "" : "disabled"}>
        ${isMatching ? nextBtnTextSuccess : nextBtnTextDefault}
      </button>
    </main>`;
}
