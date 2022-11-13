import { birdsData } from '../utils/mocks.js';
import { createFooter } from "../layout-makers/create-footer.js";
import { createHeader } from '../layout-makers/create-header.js';
import { createMainGame } from '../layout-makers/create-game-main.js';
import { addActiveToNavigation, getRandomNumber, setDeclineAcceptStyles, setScore } from '../utils/helpers.js';

export function createGamePage(counter = 0, arr = birdsData, checkedAnswer = '', question = '', score = 5, total = 0) {
    let innerCounter = counter;
    let innerChecked = checkedAnswer;
    let innerQuestionBird;
    let innerTotalScore = total;
    let innerScore = score;
  
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
    addActiveToNavigation(innerCounter);
    setDeclineAcceptStyles(checkedAnswer, innerQuestionBird);

    const scoreMark = document.querySelector(".score__value");
      if (checkedAnswer === innerQuestionBird.name) {
        innerTotalScore = innerTotalScore + ++innerScore;
        scoreMark.textContent = innerTotalScore;
      } else {
      scoreMark.textContent = innerTotalScore;
     }
    const nextBtn = document.querySelector('.next-btn');
    const answersList = document.querySelector('.answers-list');
  
    answersList.addEventListener('click', ({target}) => {
      if (!target.disabled) {
        createGamePage(innerCounter, birdsData, target.value, innerQuestionBird, --innerScore, innerTotalScore);
      }
    });
  
    nextBtn.addEventListener('click', () => createGamePage(++innerCounter, birdsData, '', null, 5, innerTotalScore));
}