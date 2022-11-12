import { createFooter, createHeader } from "../create-start-page/create-start-page";
import { answers, categories, description, nextBtnText } from '../utils/const';
import { birdsData } from '../utils/mocks.js';

import symphonyBeethoven from '../../audio/beethoven-5-symphony.mp3';
import questionIcon from '../../img/svg/question-mark.svg';


function createGame(answersVariants, checkedData) {
    const categoriesList = categories.map((category) => `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`).join('');
    console.log(checkedData);

    const { name, audio, image, species, description} = checkedData;

    return `<main class="game">
      <ul class="game__list categories-list">
       ${categoriesList}
      </ul>
      <div class="game__question question">
        <img src=${questionIcon} alt="" class="question__img" width="50px"/>
        <span class="question__name">**********</span>
        <audio class="question__audio" src=${symphonyBeethoven} controls />
      </div>
      <form class="game__answers-list answers-list">
        ${answersVariants}
      </form>
      <div class="game__checked-answer checked-answer">
        <img src=${image} alt="" class="checked-answer__img" />
        <span class="checked-answer__surname">${name}</span>
        <p align="justify" class="checked-answer__description">
            ${description}
        </p>
        <audio class="checked-answer__audio" src=${audio} controls />
      </div>
      <button class="game__next-btn next-btn" type="button">
        ${nextBtnText}
      </button>
    </main>`
}

export function createGamePage(counter = 0, arr = birdsData, checkedAnswer = 'Журавль') {
    let innerCounter = counter;
    let innerChecked = checkedAnswer;
    const filtredBirds = arr[counter];
    const questionBird = arr[counter][counter];
    console.log(filtredBirds.slice().forEach((bird) => console.log(bird.name, innerChecked)));    

    const checkedData = filtredBirds.slice().filter(({name}) => name === innerChecked);
    const answersVariants = filtredBirds.slice().map(({name}) => `<label class="answers-list__label"><input type="radio" class="answers-list__input" value=${name} name="answers"/>${name}</label>`).join('');

    const body = document.querySelector('.page');
    body.innerHTML = '';

    const layout = `${createHeader()}${createGame(answersVariants, ...checkedData)}${createFooter()}`;
    body.insertAdjacentHTML('afterbegin', layout);

    const navList = document.querySelector('.game__list');
    const answersList = document.querySelector('.answers-list');
  
    answersList.addEventListener('click', ({target}) => createGamePage(innerCounter, birdsData, target.value));
    navList.addEventListener('click', () => {
      const newCounter = ++innerCounter;
      const newData = birdsData[newCounter];
      const defaultBird = newData[newCounter].name;

      createGamePage(newCounter, birdsData, defaultBird);
    });
}