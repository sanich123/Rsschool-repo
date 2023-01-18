import { CAR_ICON_WIDTH_DEFAULT } from "./const";

export function animatePosition(node: HTMLElement, end: number, duration: number, cancelAnimation: boolean) {
    console.log(cancelAnimation)
  let currentX = 104;
  const framesCount = (duration / 1000) * 60;
  const dx = (end - currentX) / framesCount;
  const tick = () => {
    currentX += dx;
    node.style.transform = `translateX(${currentX}px)`;
    if (currentX < end) {
      requestAnimationFrame(tick);
    }
  };
  if (!cancelAnimation) {
      tick();
  }
}

export function getLengthOfParentContainer() {
    const li = document.querySelector('.list-item') as HTMLLIElement;
    return Number(window.getComputedStyle(li).getPropertyValue('width').replace(/px/gi, '')) - CAR_ICON_WIDTH_DEFAULT * 2;
}
