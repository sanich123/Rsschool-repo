import { rulesText, promoSentence, start } from "../utils/const.js";
import perGunt from "../../video/grig-per-gunt.mp4";

export function createStartMain() {
  const rulesItems = rulesText
    .map(
      (text) =>
        `<li class="promo-rules__item"><p align="justify">${text}</p></li>`
    )
    .join("");

  return `<main class="page__main main">
      <div class="promo">
      <video class="promo__video" src=${perGunt} controls></video>
        <p class="promo__sentence">${promoSentence}</p>
        <button class="promo__btn">${start}</button>
        <ol class="promo__rules promo-rules">${rulesItems}</ol>
      </div>
    </main>`;
}
