export function getGarageNodes() {
    const createCarForm = document.querySelector('.create-car') as HTMLFormElement;
    const createNameInput = document.querySelector('.create-car__name-input') as HTMLInputElement;
    const createColorInput = document.querySelector('.create-car__color-input') as HTMLInputElement;
    const carsListListener = document.querySelector('.cars-list') as HTMLUListElement;
    return {
        createCarForm, createNameInput, createColorInput, carsListListener,
    }
}