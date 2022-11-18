import '@babel/polyfill';
import { createStartPage } from "./create-start-page/create-start-page.js";
import "../index.html";
import "../less/entry.less";
createStartPage();
if (window.location.href.includes('main')) {
createStartPage();
}


