import { navLinks, promoSentence, start, rulesText } from "../utils/const";
import beethovenIcon from "../../img/svg/beethoven-icon.svg";
import perGunt from "../../video/grig-per-gunt.mp4";
import rsSchoolSvg from "../../img/svg/rs-school-icon.svg";
import { createGamePage } from "../create-game/create-game";

export function createHeader() {
  const navLinksLayout = navLinks.map(({ href, text }) => `<li class="nav-list__item"><a href="${href}">${text}</a>`).join("");

  return `<header class="page__header header">
      <a class="header__logo logo" href="index.html">
        <img class="logo__img" src=${beethovenIcon} width="60px" height="60px" />
      </a>
      <nav class="header__nav nav">
        <ul class="nav__list nav-list">
          ${navLinksLayout}
        </ul>
      </nav>
      <div class="header__score score">
        Score:
        <span class="score__value">0</span>
      </div>
    </header>`;
}

function createMain() {
  const rulesItems = rulesText.map((text) => `<li class="promo-rules__item"><p align="justify">${text}</p></li>`).join("");

  return `<main class="page__main main">
      <div class="promo">
      <video class="promo__video" src=${perGunt} controls></video>
        <p class="promo__sentence">${promoSentence}</p>
        <button class="promo__btn">${start}</button>
        <ol class="promo__rules promo-rules">${rulesItems}</ol>
      </div>
    </main>`;
}

export function createFooter() {

  return `<footer class="page__footer footer">
      <ul class="footer__list footer-list">
        <li class="footer-list__item list-item">
          <a href="https://rs.school/js/">
            <img src=${rsSchoolSvg} alt="" />
          </a>
        </li>
        <li class="footer-list__item list-item">
          <a class="author-link" href="https://github.com/sanich123">
            Связаться с автором
          </a>
        </li>
        <li сlass="footer-list__item list-item">
          <span class="list-item__year">2022 г.</span>
        </li>
      </ul>
    </footer>`;
}

export function createStartPage() {
  const body = document.querySelector(".page");

  const layout = `${createHeader()}${createMain()}${createFooter()}`;
  body.innerHTML = "";
  body.insertAdjacentHTML("afterbegin", layout);
  const mainPage = document.querySelector('.nav-list__item a[href="index.html"]');
  const gamePage = document.querySelector('.nav-list__item a[href="game.html"]');
  const gameBtn = document.querySelector('.promo__btn');
  gameBtn.addEventListener('click', () => {
    window.history.pushState({urlPath: 'game.html'}, '', 'game.html');
    createGamePage();
  });

  mainPage.addEventListener("click", () => createStartPage);
  gamePage.addEventListener('click', () => createGamePage);

}
