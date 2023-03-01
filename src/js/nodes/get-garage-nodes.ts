export type GenericNode<Type> = Type | null;

export function getGarageNodes() {
    const createCarForm: GenericNode<HTMLFormElement> = document.querySelector('.create-car');
    const updateCarForm: GenericNode<HTMLFormElement> = document.querySelector('.update-car');
    const createNameInput: GenericNode<HTMLInputElement> = document.querySelector('.create-car__name-input');
    const createColorInput: GenericNode<HTMLInputElement> = document.querySelector('.create-car__color-input');
    const updateNameInput: GenericNode<HTMLInputElement> = document.querySelector('.update-car__name-input');
    const updateColorInput: GenericNode<HTMLInputElement> = document.querySelector('.update-car__color-input');
    const carsListListener: GenericNode<HTMLUListElement> = document.querySelector('.cars-list');
    const updateCarBtn: GenericNode<HTMLButtonElement> = document.querySelector('.update-car__btn');
    const raceResetGenerateBtns: GenericNode<HTMLFormElement> = document.querySelector('.create-section__btns');
    const paginationBtns: GenericNode<HTMLFormElement> = document.querySelector('.page-btns');
    const raceBtn: GenericNode<HTMLButtonElement> = document.querySelector('.race__btn');
    const startStopBtns: GenericNode<NodeListOf<HTMLButtonElement>> = document.querySelectorAll('.start-stop__label');
    const generateCarsBtn: GenericNode<HTMLButtonElement> = document.querySelector('.random-cars__btn');
    const resetCarsBtn: GenericNode<HTMLButtonElement> = document.querySelector('.reset__btn');
    const selectDeleteBtns: GenericNode<NodeListOf<HTMLButtonElement>> = document.querySelectorAll('.list-item__btn');
    const stopBtns: GenericNode<NodeListOf<HTMLButtonElement>> = document.querySelectorAll('.stop-btn');
    const garageLink: GenericNode<HTMLButtonElement> = document.querySelector('.garage');
    const winnersLink: GenericNode<HTMLButtonElement> = document.querySelector('.winners');
    const labelUpdateCar: GenericNode<HTMLSpanElement> = document.querySelector('.create-update-name-label');
    return {
        createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateNameInput, updateColorInput, updateCarBtn, raceResetGenerateBtns, paginationBtns, raceBtn, startStopBtns, generateCarsBtn, resetCarsBtn, selectDeleteBtns, stopBtns, garageLink, winnersLink, labelUpdateCar
    }
}