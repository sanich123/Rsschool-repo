export function createPagination() {
    return `<section class="pagination">
          <form class="pagination__page-btns page-btns">
            <button
              class="page-btns__label"
              type="button"
              value="previous"
              name="prev-btn"
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
            <label for="number-page-input" class="page-btns__label">1</label>
            <button
              class="page-btns__label"
              type="button"
              value="next"
              name="next-btn"
            >
              >
            </button>
            <input
              class="page-btns-number__input"
              type="number"
              name="amount-items"
              value=""
            />
          </form>
        </section>`
}