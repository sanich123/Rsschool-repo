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
