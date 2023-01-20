import { createHeader } from "../markup/create-header";
import { createPagination } from "../markup/create-pagination";
import { createWinnersList } from "../markup/create-winners-list";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { getWinnersNodes } from "../nodes/get-winners-nodes";
import { getCars, getWinners } from "../utils/async-functions";
import { LS_KEYS, PAGINATION_BTNS, ROUTES, SEARCH_PARAMS } from "../utils/const";
import { applyToLocalStorage, getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { getPaginatedData } from "../utils/pagination";
import { hashListener } from "../utils/router";
import { WinnersType } from "../utils/types";
import { getSearchParams } from "../utils/utils";

export default async function CreateWinners(winners: WinnersType[] = []) {
  const { searchParams } = getSearchParams();
  setDefaultPageToLocalStorage(winners.length);
  const pageNumberWinners = getFromLocalStorage(LS_KEYS.pageNumberWinners);
  const { paginatedData, amountPages } = getPaginatedData(winners, pageNumberWinners);
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = `<main class="page-main">
    ${createHeader()}
    ${createPagination(amountPages)}
    ${await createWinnersList(paginatedData as WinnersType[])}</main>`;
  const { paginationBtns, garageLink, winnersLink } = getGarageNodes();
  const { timeBtn, winsBtn } = getWinnersNodes();
  garageLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.garage);
    getCars();
  });
  winnersLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.winners);
    getWinners();
  });
  winsBtn?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      searchParams.set(SEARCH_PARAMS.sort, SEARCH_PARAMS.wins);
      searchParams.set(SEARCH_PARAMS.order, value);
      window.history.pushState({}, "", `${window.location.origin}/${ROUTES.winners}?${searchParams.toString()}`);
      getWinners(`?${searchParams.toString()}`);
    }
  });
  timeBtn?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      searchParams.set(SEARCH_PARAMS.sort, SEARCH_PARAMS.time);
      searchParams.set(SEARCH_PARAMS.order, value);
      window.history.pushState({}, "", `${window.location.origin}/${ROUTES.winners}?${searchParams.toString()}`);
      getWinners(`?${searchParams.toString()}`);
    }
  });
  paginationBtns?.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      if (value === PAGINATION_BTNS.next)
        applyToLocalStorage(LS_KEYS.pageNumberWinners, pageNumberWinners + 1);
      if (value === PAGINATION_BTNS.previous)
        applyToLocalStorage(LS_KEYS.pageNumberWinners, pageNumberWinners - 1);
      CreateWinners(winners);
    }
  });
  hashListener();
}
