import { createAudio } from "./create-audio";
import { DEFAULT_TEXT_RU, DEFAULT_TEXT_US, NEXT_BTN_TEXT_SUCCESS_RU, NEXT_BTN_TEXT_DEFAULT_RU, NEXT_BTN_TEXT_DEFAULT_US, NEXT_BTN_TEXT_SUCCESS_US, LANGUAGES } from "../utils/const";

export function createCategories(categories) {
  return categories.map((category) => `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`).join("");
};

export function createAnswers(answers) {
  return answers.map(({ name }) => `<button class="answers-list__btn" value="${name}">${name}</button>`).join("");
}

export function createCheckedAnswerLayout(checkedData) {
  const [{ name, audio, image, description, species }] = checkedData;
  return `<img src="${image}" alt="" class="checked-answer__img" />
                <div class="checked-answer__surname">
        <span>${name}</span><span class="checked-answer__surname--species">(${species})</span></div>
        <p align="justify" class="checked-answer__description">${description}</p>${createAudio(audio, "checked-answer")}`;
};

export function createCheckedBirdLayout(checkedData) {
  const { name, audio, image, description, species } = checkedData;
  return `<img src="${image}" alt="" class="checked-answer__img" />
        <div class="checked-answer__surname">
        <span>${name}</span><span class="checked-answer__surname--species">(${species})</span></div>
        <p align="justify" class="checked-answer__description">${description}</p>${createAudio(audio, "checked-answer")}`;
}


export function createCheckedAnswerDefault(innerLang) {
  return `<div></div><p class="checked-answer__default">${innerLang === LANGUAGES.ru ? DEFAULT_TEXT_RU : DEFAULT_TEXT_US}</p>`;
}

export function createNextBtn(innerLang, isMatching) {
  if (isMatching) {
    if (innerLang === LANGUAGES.ru) {
      return NEXT_BTN_TEXT_SUCCESS_RU;
    } else {
      return NEXT_BTN_TEXT_SUCCESS_US;
    }
  } else {
    if (innerLang === LANGUAGES.ru) {
      return NEXT_BTN_TEXT_DEFAULT_RU;
    } else {
      return NEXT_BTN_TEXT_DEFAULT_US;
    }
  }
}

export function createRules(rules) {
  return rules.map((text) => `<li class="promo-rules__item"><p align="justify">${text}</p></li>`).join("");
}

export function createNavLinks(arr) {
  return arr.map((text) => `<li class="nav-list__item"><button class="nav-list__btn--${text.length < 50 ? text : 'svg'}">${text}</button>`).join("");
}
