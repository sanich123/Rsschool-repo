export function startStopBtns() {
  return `<form class="list-item__start-stop start-stop">
              <input
                id="start-input"
                type="radio"
                class="start-stop__input"
                name="start-stop"
                value="start"
              />
              <label for="start-input" class="start-stop__label">Start</label>
              <input
                id="stop-input"
                type="radio"
                class="start-stop__input"
                name="start-stop"
                value="stop"
              />
              <label for="stop-input" class="start-stop__label">Stop</label>
            </form>`;
}
