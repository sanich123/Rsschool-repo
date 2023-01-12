import Create404Page from "../pages/create-404-page";
import CreateGarage from "../pages/create-garage";
import CreateWinners from "../pages/create-winners";
import { ROUTES } from "./const";
import { getData } from "./data-actions";

export default function Router() {
    const location = window.location.href;
    if (location.includes(ROUTES.garage) || !location.includes('#')) {
        // CreateGarage();
        getData();
    } 
    if (location.includes(ROUTES.winners)) {
        CreateWinners();
    } else {
        Create404Page();
    }
    hashListener();
}

export function hashListener() {
    return window.addEventListener('hashchange', (event) => {
        const { newURL } = event;
        window.history.pushState({}, '', getUrl(newURL));
        Router();
    });
}

export function getUrl(string: string) {
    return string.slice(string.indexOf('#'));
}