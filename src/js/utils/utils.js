/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
import { mobile, tablet, desktop } from './const';

export const zeroAdder = (string) => (+string >= 10 ? string : `0${string}`);
export const widthMatcher = (width) => {
  if (width < tablet) {
    return mobile;
  }
  if (width >= tablet && width < desktop) {
    return tablet;
  }
  return desktop;
};

export const widthChanger = (nodes, currentWidth, colsForInnerNeeds) => {
  nodes.forEach((el) => {
    el.style.width = `${widthMatcher(currentWidth) / colsForInnerNeeds}px`;
    el.style.height = el.style.width;
    return el;
  });
};

export function checkRightness(arr) {
  let sum = 0;
  const leftSide = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum += Math.floor(i / Math.sqrt(arr.length) + 1);
    } else {
      sum += arr[i] - 1 - leftSide.filter((e) => e < arr[i]).length;
      leftSide.push(arr[i]);
    }
  }
  return sum % 2 === 0 ? 'Эту головоломку можно потыкать' : 'Эту головоломку нельзя решить, тыкни в новую игру';
}
