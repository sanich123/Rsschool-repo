import { createHeader } from "../layout-makers/create-header";
import { createFooter } from "../layout-makers/create-footer";
import { createGallerySlider } from "../layout-makers/create-gallery-slider";
import { INITIAL_COUNT, LANGUAGES, LOCAL_STORAGE_KEYS } from "../utils/const";
import { BIRDS_DATA_EN, BIRDS_DATA_RU } from '../utils/mocks';
import { getNavLinks } from "../layout-makers/get-nav-links";
import { setAudio } from "../manage-audio/manage-audio";
import { router } from "../utils/router";

export function createGalleryPage(counter = INITIAL_COUNT) {
    let innerCounter = counter;
    const body = document.querySelector('.page');
    body.innerHTML = '';
    const innerLang = localStorage.getItem(LOCAL_STORAGE_KEYS.language);
    const isRu = innerLang === LANGUAGES.ru;
    const birds = isRu ? BIRDS_DATA_RU.flat() : BIRDS_DATA_EN.flat();
    
    const chosenBird = birds[innerCounter];
    body.insertAdjacentHTML('afterbegin', `${createHeader(innerLang)}${createGallerySlider(chosenBird, innerCounter, birds.length)}${createFooter(innerLang)}`);
    getNavLinks(innerLang, innerCounter);
    setAudio();
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
    leftBtn.addEventListener('click', () => {
        createGalleryPage(--innerCounter)
    });
    rightBtn.addEventListener('click', () => {
        createGalleryPage(++innerCounter);
    });
    window.addEventListener('hashchange', (event) => {
        const indexHash = event.newURL.indexOf('#');
        const newUrl = event.newURL.slice(indexHash);
        window.history.pushState({ urlPath: newUrl }, '', newUrl);
        router(newUrl);
    });
}