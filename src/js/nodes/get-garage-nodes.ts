export function getGarageNodes() {
    const createCarForm = document.querySelector('.create-car') as HTMLFormElement;
    const createNameInput = document.querySelector('.create-car__name-input') as HTMLInputElement;
    const createColorInput = document.querySelector('.create-car__color-input') as HTMLInputElement;
    return {
        createCarForm, createNameInput, createColorInput,
    }
}