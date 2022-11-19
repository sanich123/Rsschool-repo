import { createAudio } from "./create-audio";
import { defaultText, defaultTextUs, nextBtnTextSuccessRu, nextBtnTextDefaultRu, nextBtnTextDefaultUs, nextBtnTextSuccessUs  } from "../utils/const";

export function createCategories(categories) {
  return categories.map((category) => `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`).join("");
};

export function createAnswers(answers) {
  return answers.map(({ name }) => `<button class="answers-list__btn" value="${name}">${name}</button>`).join("");
}

export function createCheckedAnswerLayout(checkedData) {
  const [{ name, audio, image, description, species }] = checkedData;
  return `<img src="${image}" alt="" class="checked-answer__img" />
        <span class="checked-answer__surname">${name} (${species})</span>
        <p align="justify" class="checked-answer__description">${description}</p>${createAudio(audio, "checked-answer")}`;
};

export function createCheckedAnswerDefault(innerLang) {
  return `<div></div><p class="checked-answer__default">${innerLang === 'ru' ? defaultText : defaultTextUs}</p>`;
}

export function createNextBtn(innerLang, isMatching) {
  if (isMatching) {
    if (innerLang === 'ru') {
      return nextBtnTextSuccessRu;
    } else {
      return nextBtnTextSuccessUs;
    } 
    } else {
      if (innerLang === 'ru') {
        return nextBtnTextDefaultRu;
      } else {
        return nextBtnTextDefaultUs;
      } 
    }
  }
