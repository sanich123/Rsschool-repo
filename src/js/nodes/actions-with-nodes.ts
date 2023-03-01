import { GenericNode } from "./get-garage-nodes";

export function disableNodes(generateCarsBtn: GenericNode<HTMLButtonElement>, resetCarsBtn: GenericNode<HTMLButtonElement>, startStopBtns: NodeListOf<HTMLButtonElement>, selectDeleteBtns: NodeListOf<HTMLButtonElement>) {
    generateCarsBtn ? generateCarsBtn.disabled = true : ''
    resetCarsBtn ? resetCarsBtn.disabled = true : '';
    startStopBtns.forEach((btn) => btn.disabled = true);
    selectDeleteBtns.forEach((btn) => btn.disabled = true);
}

export function enableNodes(generateCarsBtn: GenericNode<HTMLButtonElement>, resetCarsBtn: GenericNode<HTMLButtonElement>, startStopBtns: NodeListOf<HTMLButtonElement>, selectDeleteBtns: NodeListOf<HTMLButtonElement>) {
    generateCarsBtn ? generateCarsBtn.disabled = false : '';
    resetCarsBtn ? resetCarsBtn.disabled = false : '';
    startStopBtns.forEach((btn) => btn.disabled = false);
    selectDeleteBtns.forEach((btn) => btn.disabled = false);
}
