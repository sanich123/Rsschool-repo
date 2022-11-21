import '@babel/polyfill';
import { createStartPage } from "./create-start-page/create-start-page.js";
import "../index.html";
import "../less/entry.less";
console.log('Привет! Вроде кроме пункта: при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться реализовано.');
createStartPage();