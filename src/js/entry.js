import '@babel/polyfill';
import { createStartPage } from "./create-start-page/create-start-page.js";
import "../index.html";
import "../less/entry.less";
import { PATHS } from './utils/const.js';
import { createGamePage } from './create-game/create-game.js';
import { createGalleryPage } from './create-gallery/create-gallery.js';
import { router } from './utils/router.js';

const location = window.location.href;

router(location);




