import { PATHS } from "./const";
import {createStartPage} from '../create-start-page/create-start-page';
import {createGamePage} from '../create-game/create-game';
import { createGalleryPage } from "../create-gallery/create-gallery";

export function router(location) {
    if (location.includes(PATHS.main)) {
        return createStartPage();
    } else if (location.includes(PATHS.game)) {
        return createGamePage();
    } else if (location.includes(PATHS.gallery)) {
        return createGalleryPage();
    } else {
        return createStartPage();
    }
}