import { navLinks } from "../utils/const.js";
import beethovenIcon from '../../img/svg/beethoven-icon.svg';

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