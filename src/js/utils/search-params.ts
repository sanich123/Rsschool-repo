import CreateWinners from "../pages/create-winners";
import { ROUTES, SEARCH_PARAMS } from "./const";

export function setSortSearchParamsWinners(searchParams: URLSearchParams, winsOrTime: string, value: string) {
    searchParams.set(SEARCH_PARAMS.sort, winsOrTime);
    searchParams.set(SEARCH_PARAMS.order, value);
    window.history.pushState({}, "", `${window.location.origin}/${ROUTES.winners}?${searchParams.toString()}`);
    CreateWinners(`?${searchParams.toString()}`);
}