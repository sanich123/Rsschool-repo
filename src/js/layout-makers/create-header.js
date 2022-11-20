import { NAV_LINKS_RU, NAV_LINKS_US, LANGUAGES } from "../utils/const.js";
import { createNavLinks } from "./create-parts.js";
import { createLogoIcon } from "./create-icons.js";

export function createHeader(lang = LANGUAGES.ru) {

  return `<header class="page__header header">
      <a class="header__logo logo" href="index.html">
        ${createLogoIcon()}
      </a>
      <nav class="header__nav nav">
        <ul class="nav__list nav-list">
          ${lang === LANGUAGES.ru ? createNavLinks(NAV_LINKS_RU) : createNavLinks(NAV_LINKS_US) }
        </ul>
      </nav>
      <div class="header__score score">
        ${lang === LANGUAGES.ru ? 'Счет' : 'Score'}:
        <span class="score__value">0</span>
      </div>
    </header>`;
}
//<img class="logo__img" src=${logoIcon} width="60px" height="60px" />