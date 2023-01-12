import { hashListener } from "../utils/router";

export default function Create404Page() {
    const body = document.querySelector('.page') as HTMLBodyElement;
    body.innerHTML = '<h1>We tried to find this page, but unfortunately we didnt find it</h1>';
    hashListener();
}