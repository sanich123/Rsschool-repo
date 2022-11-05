/* eslint-disable linebreak-style */
import '../img/Фото резюме.jpg';
import '../audio/listing-page.mp3';
import '@babel/polyfill';
import '../index.html';
import '../less/entry.less';
import { defaultValue } from './utils/const';
import CreateGame from './createGame/createGame';

CreateGame(defaultValue, 4, document.documentElement.clientWidth);
