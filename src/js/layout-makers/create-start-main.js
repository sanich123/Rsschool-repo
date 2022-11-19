import { RULES_TEXT_RU, RULES_TEXT_US, PROMO_SENTENCE_RU, PROMO_SENTENCE_US, START_RU, START_US, LANGUAGES } from "../utils/const.js";
import perGunt from "../../video/grig-per-gunt.mp4";
import { createRules } from "./create-parts.js";

export function createStartMain(language = LANGUAGES.ru) {
  const isRu = language === LANGUAGES.ru;

  return `<main class="page__main main">
      <div class="promo">
      <video class="promo__video" src=${perGunt} controls></video>
        <p class="promo__sentence">${isRu ? PROMO_SENTENCE_RU : PROMO_SENTENCE_US}</p>
        <button class="promo__btn">${isRu ? START_RU : START_US}</button>
        <ol class="promo__rules promo-rules">${isRu ? createRules(RULES_TEXT_RU) : createRules(RULES_TEXT_US)}</ol>
      </div>
    </main>`;
}
