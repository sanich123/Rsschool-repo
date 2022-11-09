import { createFooter, createHeader } from "../create-start-page/create-start-page";
import { answers, categories, description, nextBtnText } from '../utils/const';
import symphonyBeethoven from '../../audio/beethoven-5-symphony.mp3';
import symphonyTchaikovsky from '../../audio/tchaikovsky-adagio.mp3';
import questionIcon from '../../img/svg/question-mark.svg';
import tchaikovskyImg from '../../img/jpg/tchaikovsky.jpg';

function createGame() {
    const categoriesList = categories.map((category) => `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`).join('');
    const answersList = answers.map((answer) => `<label class="answers-list__label"><input type="radio" class="answers-list__input" value=${answer} name="answers"/>${answer}</label>`).join('');

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
        ${answersList}
      </form>
      <div class="game__checked-answer checked-answer">
        <img src=${tchaikovskyImg} alt="" class="checked-answer__img" />
        <span class="checked-answer__surname">Tchaikovsky</span>
        <p align="justify" class="checked-answer__description">
            ${description}
        </p>
        <audio class="checked-answer__audio" src=${symphonyTchaikovsky} controls />
      </div>
      <button class="game__next-btn next-btn" type="button">
        ${nextBtnText}
      </button>
    </main>`
}
export function createGamePage() {
    const body = document.querySelector('.page');
    body.innerHTML = '';
    const layout = `${createHeader()}${createGame()}${createFooter()}`
    body.insertAdjacentHTML('afterbegin', layout);
}