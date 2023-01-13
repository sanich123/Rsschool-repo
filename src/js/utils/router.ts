import { ROUTES } from "./const";
import { getCars, getWinners } from "./data-actions";

export default function Router() {
    const location = window.location.href;
    if (location.includes(ROUTES.garage) || !location.includes('#')) {
        getCars();
    } 
    if (location.includes(ROUTES.winners)) {
        getWinners();
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