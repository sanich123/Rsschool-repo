import { createHeader } from "../markup/create-header";
import { createLoader } from "../markup/create-loader";
import { createPagination } from "../markup/create-pagination";
import { createWinnersList } from "../markup/create-winners-list";
import { getGarageNodes } from "../nodes/get-garage-nodes";
import { getWinnersNodes } from "../nodes/get-winners-nodes";
import { getWinners } from "../utils/async-functions";
import { LS_KEYS, ROUTES, SEARCH_PARAMS } from "../utils/const";
import { getFromLocalStorage, setDefaultPageToLocalStorage } from "../utils/local-storage";
import { getPaginatedData, incrementDecrementPage } from "../utils/pagination";
import Router, { hashListener } from "../utils/router";
import { setSortSearchParamsWinners } from "../utils/search-params";
import { WinnersType } from "../utils/types";
import { getSearchParams } from "../utils/utils";

export default async function CreateWinners(sortParams = '') {
  const body = document.querySelector(".page") as HTMLBodyElement;
  body.innerHTML = createLoader();
  const winners = await getWinners(sortParams);
  const { searchParams } = getSearchParams();
  setDefaultPageToLocalStorage(winners.length);
  const pageNumberWinners = getFromLocalStorage(LS_KEYS.pageNumberWinners);
  const { paginatedData, amountPages } = getPaginatedData(winners, pageNumberWinners);
  body.innerHTML = `<main class="page-main">
    ${createHeader()}
    ${createPagination(amountPages)}
    ${await createWinnersList(paginatedData as WinnersType[])}</main>`;
  const { paginationBtns, garageLink, winnersLink } = getGarageNodes();
  const { timeBtn, winsBtn } = getWinnersNodes();
  garageLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.garage);
    Router();
  });
  winnersLink.addEventListener('click', () => {
    window.history.pushState({}, '', ROUTES.winners);
    Router();
  });
  winsBtn?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      setSortSearchParamsWinners(searchParams, SEARCH_PARAMS.wins, value);
    }
  });
  timeBtn?.addEventListener("click", async ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      setSortSearchParamsWinners(searchParams, SEARCH_PARAMS.time, value)
    }
  });
  paginationBtns?.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLButtonElement) {
      const { value } = target;
      // if (value === PAGINATION_BTNS.next)
      //   applyToLocalStorage(LS_KEYS.pageNumberWinners, pageNumberWinners + 1);
      // if (value === PAGINATION_BTNS.previous)
      //   applyToLocalStorage(LS_KEYS.pageNumberWinners, pageNumberWinners - 1);
      // CreateWinners();
      incrementDecrementPage(value);
    }
  });
  hashListener();
}
