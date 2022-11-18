import { createAudio } from "./create-audio";

export function createCategories(categories) {
  return categories
    .map(
      (category) =>
        `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`
    )
    .join("");
}

export const createAnswers = (answers) =>
  answers
    .map(
      ({ name }) =>
        `<button class="answers-list__btn" value="${name}">${name}</button>`
    )
    .join("");

export const createCheckedAnswerLayout = (
  image,
  name,
  species,
  description,
  audio
) => {
  return `<img src="${image}" alt="" class="checked-answer__img" />
        <span class="checked-answer__surname">${name} (${species})</span>
        <p align="justify" class="checked-answer__description">${description}</p>${createAudio(
    audio,
    "checked-answer"
  )}`;
};
