/* eslint-disable linebreak-style */

import '@babel/polyfill';
import '../index.html';
import '../less/entry.less';
import { defaultValue } from './utils/const';
import CreateGame from './createGame/createGame';
CreateGame(defaultValue, 4, document.documentElement.clientWidth);