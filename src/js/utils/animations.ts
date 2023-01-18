import { CAR_ICON_WIDTH_DEFAULT } from "./const";

export function getLengthOfParentContainer() {
    const li = document.querySelector('.list-item') as HTMLLIElement;
    return Number(window.getComputedStyle(li).getPropertyValue('width').replace(/px/gi, '')) - CAR_ICON_WIDTH_DEFAULT * 2;
}
