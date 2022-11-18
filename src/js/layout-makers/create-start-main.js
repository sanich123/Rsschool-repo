import { rulesTextRu, rulesTextUs, promoSentenceRu, promoSentenceUs, startRu, startUs } from "../utils/const.js";
import perGunt from "../../video/grig-per-gunt.mp4";
import { createRules } from "./create-rules.js";

export function createStartMain(language = 'ru') {
  const isRu = language === 'ru';

  return `<main class="page__main main">
      <div class="promo">
      <video class="promo__video" src=${perGunt} controls></video>
        <p class="promo__sentence">${isRu ? promoSentenceRu : promoSentenceUs}</p>
        <button class="promo__btn">${isRu ? startRu : startUs}</button>
        <ol class="promo__rules promo-rules">${isRu ? createRules(rulesTextRu) : createRules(rulesTextUs)}</ol>
      </div>
    </main>`;
}
