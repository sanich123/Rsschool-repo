import { LS_KEYS } from "../utils/const"
import { getFromLocalStorage } from "../utils/local-storage"

export function createPagination(amountPages: number) {
  const location = window.location.href;
  const isGarage = location.includes('#garage') || !location.includes('#');
  const page = isGarage ? +getFromLocalStorage(LS_KEYS.pageNumber) : +getFromLocalStorage(LS_KEYS.pageNumberWinners);
  const isFirstPage = page === 1 ? 'disabled' : '';
  const isLastPage = page < amountPages ? '' : 'disabled';
  const isOnePage = amountPages === 1 ? 'disabled' : '';

  return `<section class="pagination">
          <form class="pagination__page-btns page-btns">
            <button
              class="page-btns__label"
              type="button"
              value="previous"
              name="prev-btn"
              ${isFirstPage || isOnePage}
            >
              <
            </button>
            <input
              class="page-btns__radio visually-hidden"
              id="number-page-input"
              name="page-btns"
              type="radio"
              value=""
            />
            <button for="number-page-input" class="page-btns__label" ${isOnePage}>${page}</button>
            <button
              class="page-btns__label"
              type="button"
              value="next"
              name="next-btn"
              ${isLastPage || isOnePage}
            >
              >
            </button>
          </form>
        </section>`
}