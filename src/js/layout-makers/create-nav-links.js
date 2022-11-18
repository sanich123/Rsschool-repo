export function createNavLinks(arr) {
    return arr.map((text) => `<li class="nav-list__item"><button class="nav-list__btn--${text.length < 50 ? text : 'svg'}">${text}</button>`).join("");
}