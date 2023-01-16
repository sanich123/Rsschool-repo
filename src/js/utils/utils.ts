import { CAR_BRANDS_MODELS, SEARCH_PARAMS } from "./const";
import { CarsMocksType } from "./types";

export function getRandomColor() {
  const red = Math.floor(Math.random() * 256).toString(16);
  const green = Math.floor(Math.random() * 256).toString(16);
  const blue = Math.floor(Math.random() * 256).toString(16);
  return `#${red}${green}${blue}`;
}
export function getRandomMember(array: CarsMocksType[]) {
  return array[Math.floor(array.length * Math.random())];
}

export function getRandomCarsColors() {
  return [...Array(100).keys()].map(() => {
    const { brand, models } = getRandomMember(CAR_BRANDS_MODELS);
    return { name: `${brand} ${models[Math.floor(models.length * Math.random())]}`, color: getRandomColor() };
  });
}

export function getSearchParams() {
  const location = window.location.href;
  const url = new URL(location).hash;
  const filtredParams = url.includes('?') ? url.slice(url.indexOf('?')) : '';
  const searchParams = new URLSearchParams(filtredParams);
  const sortType = searchParams.get(SEARCH_PARAMS.sort) || '';
  const sortOrder = searchParams.get(SEARCH_PARAMS.order) || '';
  return {
     sortType, sortOrder, searchParams,
  }
}
