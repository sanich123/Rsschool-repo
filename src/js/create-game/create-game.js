import { birdsData } from '../utils/mocks.js';
import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from '../layout-makers/create-header.js';
import { createMainGame } from '../layout-makers/create-game-main.js';
import { getRandomNumber } from '../utils/helpers.js';

export function createGamePage(counter = 0, arr = birdsData, checkedAnswer = 'Журавль', question = '') {
    let innerCounter = counter;
    let innerChecked = checkedAnswer;
    let innerQuestionBird;
  
    const filtredBirds = arr[counter];
    if (!question) {
      innerQuestionBird = filtredBirds[getRandomNumber(filtredBirds.length)];
    } else {
      innerQuestionBird = question;
    }
    
    
    const checkedData = filtredBirds.filter(({name}) => name === innerChecked);

    const body = document.querySelector('.page');
    body.innerHTML = '';

    body.insertAdjacentHTML('afterbegin', `${createHeader()}${createMainGame(filtredBirds, checkedData, innerQuestionBird, innerChecked)}${createFooter()}`);

    const navList = document.querySelector('.game__list');
    const answersList = document.querySelector('.answers-list');
  
    answersList.addEventListener('click', ({target}) => {
      createGamePage(innerCounter, birdsData, target.value, innerQuestionBird);
    });
    navList.addEventListener('click', () => {
      const newCounter = ++innerCounter;
      const newData = birdsData[newCounter];
      const defaultBird = newData[newCounter].name;

      createGamePage(newCounter, birdsData, defaultBird, null);
    });
}