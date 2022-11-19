import rsSchoolSvg from "../../img/svg/rs-school-icon.svg";
import { LANGUAGES, AUTHOR_LINK_RU, AUTHOR_LINK_US, GITHUB_ACCOUNT } from "../utils/const";

export function createFooter(innerLang) {

  return `<footer class="page__footer footer">
      <ul class="footer__list footer-list">
        <li class="footer-list__item list-item">
          <a href="https://rs.school/js/">
            <img src=${rsSchoolSvg} alt="" />
          </a>
        </li>
        <li class="footer-list__item list-item">
          <a class="author-link" href="${GITHUB_ACCOUNT}">
            ${innerLang === LANGUAGES.ru ? AUTHOR_LINK_RU : AUTHOR_LINK_US}
          </a>
        </li>
        <li сlass="footer-list__item list-item">
          <span class="list-item__year">2022 г.</span>
        </li>
      </ul>
    </footer>`;
}
