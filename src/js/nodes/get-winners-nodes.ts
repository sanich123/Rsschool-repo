export function getWinnersNodes() {
    const winsBtn = document.querySelector(".winners-list-item__wins-count") as HTMLButtonElement;
    const timeBtn = document.querySelector('.winners-list-item__time');
    return {winsBtn, timeBtn}
}