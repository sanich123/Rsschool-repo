export function getGarageNodes() {
    const createCarForm = document.querySelector('.create-car') as HTMLFormElement;
    const updateCarForm = document.querySelector('.update-car') as HTMLFormElement;
    const createNameInput = document.querySelector('.create-car__name-input') as HTMLInputElement;
    const createColorInput = document.querySelector('.create-car__color-input') as HTMLInputElement;
    const updateNameInput = document.querySelector('.update-car__name-input') as HTMLInputElement;
    const updateColorInput = document.querySelector('.update-car__color-input') as HTMLInputElement;
    const carsListListener = document.querySelector('.cars-list') as HTMLUListElement;
    const updateCarBtn = document.querySelector('.update-car__btn') as HTMLButtonElement;
    const raceResetGenerateBtns = document.querySelector('.create-section__btns') as HTMLFormElement;
    const paginationBtns = document.querySelector('.page-btns') as HTMLFormElement;
    const raceBtn = document.querySelector('.race__btn') as HTMLButtonElement;
    const startStopBtns = document.querySelectorAll('.start-stop__label') as NodeListOf<HTMLButtonElement>;
    const generateCarsBtn = document.querySelector('.random-cars__btn') as HTMLButtonElement;
    const resetCarsBtn = document.querySelector('.reset__btn') as HTMLButtonElement;
    const selectDeleteBtns = document.querySelectorAll('.list-item__btn') as NodeListOf<HTMLButtonElement>;
    const stopBtns = document.querySelectorAll('.stop-btn') as NodeListOf<HTMLButtonElement>;
    const garageLink = document.querySelector('.garage') as HTMLButtonElement;
    const winnersLink = document.querySelector('.winners') as HTMLButtonElement;
    return {
        createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateNameInput, updateColorInput, updateCarBtn, raceResetGenerateBtns, paginationBtns, raceBtn, startStopBtns, generateCarsBtn, resetCarsBtn, selectDeleteBtns, stopBtns, garageLink, winnersLink,
    }
}