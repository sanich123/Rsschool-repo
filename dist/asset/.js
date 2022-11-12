import '@babel/polyfill';
import { createStartPage } from "./create-start-page/create-start-page.js";
import { createGamePage } from "./create-game/create-game.js";
import "../game.html";
import "../index.html";
import "../less/entry.less";
const location = window.location.href;
if (location.includes("index.html") || location.includes("/")) {
  createStartPage();
}
if (location.includes("game.html")) {
  createGamePage();
}