export function getIdNodes(id: string) {
  const stopBtn = document.querySelector(
    `.stop-btn-${id}`
  ) as HTMLButtonElement;
  const startBtn = document.querySelector(
    `.start-btn-${id}`
  ) as HTMLButtonElement;
  const carIcon = document.getElementById(`car-${id}`) as HTMLElement;
  const winnersListItem = document.querySelector(
    `.list-item-${id}`
  ) as HTMLLIElement;
  const winnersMessage = document.querySelector(
    `.winners-message-${id}`
  ) as HTMLDivElement;
  return {
    stopBtn,
    startBtn,
    carIcon,
    winnersListItem,
    winnersMessage,
  };
}
