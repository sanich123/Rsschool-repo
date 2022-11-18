import rsSchoolSvg from "../../img/svg/rs-school-icon.svg";

export function createFooter(innerLang) {

  return `<footer class="page__footer footer">
      <ul class="footer__list footer-list">
        <li class="footer-list__item list-item">
          <a href="https://rs.school/js/">
            <img src=${rsSchoolSvg} alt="" />
          </a>
        </li>
        <li class="footer-list__item list-item">
          <a class="author-link" href="https://github.com/sanich123">
            ${innerLang === 'ru' ? 'Связаться с автором' : 'Contact the author'}
          </a>
        </li>
        <li сlass="footer-list__item list-item">
          <span class="list-item__year">2022 г.</span>
        </li>
      </ul>
    </footer>`;
}
