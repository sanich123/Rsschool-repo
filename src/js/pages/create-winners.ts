import { createHeader } from "../markup/create-header";
import { hashListener } from "../utils/router";

export default function CreateWinners() {
    const body = document.querySelector('.page') as HTMLBodyElement;
    body.innerHTML = `${createHeader()}`;
    hashListener();
}