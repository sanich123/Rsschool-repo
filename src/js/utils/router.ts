import { ROUTES } from "./const";
import CreateGarage from "../pages/create-garage";
import CreateWinners from "../pages/create-winners";

export default function Router() {
    const location = window.location.href;
    if (location.includes(ROUTES.garage) || !location.includes('#')) {
        CreateGarage()
    }
    if (location.includes(ROUTES.winners)) {
        CreateWinners();
    }
    hashListener();
}

export function hashListener() {
    return window.addEventListener('hashchange', (event) => {
        const { newURL } = event;
        console.log(getUrl(newURL));
        window.history.pushState({}, '', getUrl(newURL));
        Router();
    });
}

export function getUrl(string: string) {
    return string.slice(string.indexOf('#'));
}