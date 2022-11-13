import '@babel/polyfill';
import { createStartPage } from "./create-start-page/create-start-page.js";
import { createGamePage } from "./create-game/create-game.js";
import { createResults } from './create-results/create-results.js';
import "../game.html";
import "../index.html";
import "../less/entry.less";

const location = window.location.href;

if (location.includes("game.html")) {
  createGamePage();
} else if (location.includes("results.html")) {
  createResults();
} else {
  createStartPage();
}
