/* eslint-disable linebreak-style */

import "../audio/beethoven-5-symphony.mp3";
import "../audio/tchaikovsky-adagio.mp3";

import "../video/grig-per-gunt.mp4";
import "../img/svg/beethoven-icon.svg";
import "../img/svg/rs-school-icon.svg";
import "../img/jpg/tchaikovsky.jpg";

// import '@babel/polyfill';
import { createStartPage } from "./create-start-page/create-start-page";
import { createGamePage } from "./create-game/create-game";
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
