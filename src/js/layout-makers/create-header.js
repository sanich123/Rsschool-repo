import { navLinksRu, navLinksUs } from "../utils/const.js";
import { createNavLinks } from "./create-nav-links.js";
import logoIcon from "../../img/svg/logo-icon.svg";

export function createHeader(lang = 'ru') {
  const isRu = lang === 'ru';
  const navLinksLayout = isRu ? createNavLinks(navLinksRu) : createNavLinks(navLinksUs);

  return `<header class="page__header header">
      <a class="header__logo logo" href="index.html">
        <img class="logo__img" src=${logoIcon} width="60px" height="60px" />
      </a>
      <nav class="header__nav nav">
        <ul class="nav__list nav-list">
          ${navLinksLayout}
        </ul>
      </nav>
      <div class="header__score score">
        ${isRu ? 'Счет' : 'Score'}:
        <span class="score__value">0</span>
      </div>
    </header>`;
}
