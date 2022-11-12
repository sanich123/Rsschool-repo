import {categories, nextBtnText} from '../utils/const.js';
import questionIcon from '../../img/svg/question-mark.svg';

export function createMainGame(filtredBirds, checkedData, questionBird, innerChecked) {
    const answersVariants = filtredBirds.map(({name}) => `<label class="answers-list__label"><input type="radio" class="answers-list__input" value=${name} name="answers"/>${name}</label>`).join('');
    const categoriesList = categories.map((category) => `<li class="categories-list__item"><button class="categories-list__btn" type="button" value="${category}">${category}</button></li>`).join('');

    const { audio: questionAudio, name: questionName, image: questionImage } = questionBird;
    const [{ name, audio, image, description}] = checkedData;
    const isMatching = innerChecked === questionName;

    return `<main class="game">
      <ul class="game__list categories-list">
       ${categoriesList}
      </ul>
      <div class="game__question question">
        <img src=${isMatching ? questionImage : questionIcon} alt="" class="question__img" width="50px"/>
        <span class="question__name">${isMatching ? questionName : '**********'}</span>
        <audio class="question__audio" src=${questionAudio} controls />
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
      <button class="game__next-btn next-btn" type="button" ${isMatching ? "" : 'disabled'}>
        ${isMatching ? 'Молодест, жмякай, чтобы перейти дальше' : nextBtnText}
      </button>
    </main>`
}