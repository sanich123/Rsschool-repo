import { createCheckedBirdLayout } from "./create-parts";
import { createLeftArrow } from "./create-icons";

export function createGallerySlider(checkedData, innerCounter, max) {

    return `<main class="game"><div class="game__checked-answer checked-answer">${createCheckedBirdLayout(checkedData)}</div>
    <div class="slider-controls">
    <button class="slider-controls__btn left" type="button" ${innerCounter <= 0 ? 'disabled' : ''}>${createLeftArrow()}</button>
    <button class="slider-controls__btn right" type="button" ${innerCounter === (max - 1) ? 'disabled' : ''}>${createLeftArrow()}</button>
    </div>
    </main>`
}