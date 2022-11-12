import { birdsData } from '../utils/mocks.js';
import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from '../layout-makers/create-header.js';
import { createMainGame } from '../layout-makers/create-game-main.js';
import { getRandomNumber } from '../utils/helpers.js';
import failSound from '../../audio/fail.mp3';
import successSound from '../../audio/success.mp3';

export function createGamePage(counter = 0, arr = birdsData, checkedAnswer = '', question = '') {
    let innerCounter = counter;
    let innerChecked = checkedAnswer;
    let innerQuestionBird;
    const fail = new Audio(failSound);
    const success = new Audio(successSound);
  
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
    const answersLabels = document.querySelectorAll('.answers-list__btn');
    answersLabels.forEach((btn) => {
      if (checkedAnswer === innerQuestionBird.name && btn.value === innerQuestionBird.name) {
        success.play();
        body.style.background = 'green';
        btn.classList.add('accept');
        setTimeout(() => body.style.background = '#ebe2e2', 50);
      } else if (btn.value === checkedAnswer) {
        fail.play();
        body.style.background = 'orange';
        btn.classList.add('decline');
        btn.disabled = true;
        setTimeout(() => body.style.background = '#ebe2e2', 50);
     }
    });

    const navList = document.querySelector('.game__list');
    const answersList = document.querySelector('.answers-list');
  
    answersList.addEventListener('click', ({target}) => {
      if (target.disabled) {
        return;
      }
      createGamePage(innerCounter, birdsData, target.value, innerQuestionBird);
    });
  
    navList.addEventListener('click', () => {
      const newCounter = ++innerCounter;
      const newData = birdsData[newCounter];
      const defaultBird = newData[newCounter].name;

      createGamePage(newCounter, birdsData, defaultBird, null);
    });
}