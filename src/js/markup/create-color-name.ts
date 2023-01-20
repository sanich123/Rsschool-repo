import { DEFAULT_COLOR, LS_KEYS } from "../utils/const";
import { getFromLocalStorage } from "../utils/local-storage";

export function createColorName() {
  const createValue = getFromLocalStorage(LS_KEYS.createCarValue);
  const updateValue = getFromLocalStorage(LS_KEYS.updateCarValue);
  const createColor = getFromLocalStorage(LS_KEYS.createCarColor);
  const updateColor = getFromLocalStorage(LS_KEYS.updateCarColor);
  const createColorOrDefault = createColor || DEFAULT_COLOR;
  const updateColorOrDefault = updateColor || DEFAULT_COLOR;

    return `<section class="create-section">
        ${['create', 'update'].map((word) => `<form class="${word}-section__${word}-car ${word}-car">
        <label>
          <input class="${word}-car__name-input" type="text" placeholder="Type name of your car" value="${word === 'create' ? createValue : updateValue}" name="${word}-car-name"/><span class="create-update-name-label"></span></label>
          <input class="${word}-car__color-input" type="color" value="${word === 'create' ? createColorOrDefault : updateColorOrDefault}" name="${word}-car-color"/>
          
          <button class="${word}-car__btn" type="submit">${word.toUpperCase()}</button>
        </form>`).join('')}
        <form class="create-section__btns">
        <button class="reset__btn" type="button" name="reset">RESET</button>
        <button class="race__btn" type="button" name="race">RACE</button>
        <button class="random-cars__btn" type="button" name="generate">GENERATE CARS</button>
        </form>
      </section>`;
}