export function startStopBtns(id: number) {
  return `<form class="list-item__start-stop start-stop">
  <button class="start-stop__label start-btn-${id}" type="button" name="start-stop" value="start-${id}">Start</button>
  <button class="start-stop__label stop-btn-${id}" type="button" name="start-stop" value="stop-${id}" disabled>Stop</button>
            </form>`;
}

