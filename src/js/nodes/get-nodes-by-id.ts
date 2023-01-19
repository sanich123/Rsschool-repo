export function getIdNodes(id: string) {
    const stopBtn = document.querySelector(`.stop-btn-${id}`) as HTMLButtonElement;
    const startBtn = document.querySelector(`.start-btn-${id}`) as HTMLButtonElement;
    const carIcon = document.getElementById(`car-${id}`) as HTMLElement;
    return {stopBtn, startBtn, carIcon};
}