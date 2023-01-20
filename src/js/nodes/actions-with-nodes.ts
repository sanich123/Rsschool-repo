export function disableNodes(generateCarsBtn: HTMLButtonElement, resetCarsBtn: HTMLButtonElement, startStopBtns: NodeListOf<HTMLButtonElement>, selectDeleteBtns: NodeListOf<HTMLButtonElement>) {
    generateCarsBtn.disabled = true;
    resetCarsBtn.disabled = true;
    startStopBtns.forEach((btn) => btn.disabled = true);
    selectDeleteBtns.forEach((btn) => btn.disabled = true);
}

export function enableNodes(generateCarsBtn: HTMLButtonElement, resetCarsBtn: HTMLButtonElement, startStopBtns: NodeListOf<HTMLButtonElement>, selectDeleteBtns: NodeListOf<HTMLButtonElement>) {
    generateCarsBtn.disabled = false;
    resetCarsBtn.disabled = false;
    startStopBtns.forEach((btn) => btn.disabled = false);
    selectDeleteBtns.forEach((btn) => btn.disabled = false);
}
