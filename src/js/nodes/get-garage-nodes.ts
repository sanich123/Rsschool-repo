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
    return {
        createCarForm, createNameInput, createColorInput, carsListListener, updateCarForm, updateNameInput, updateColorInput, updateCarBtn, raceResetGenerateBtns,
    }
}