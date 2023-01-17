export function startStopBtns(id: number) {
  return `<form class="list-item__start-stop start-stop">
  <button class="start-stop__label" type="button" name="start-stop" value="start-${id}">Start</button>
  <button class="start-stop__label" type="button" name="start-stop" value="stop-${id}">Stop</button>
            </form>`;
}

// <input
//                 id="start-input"
// type = "radio"
// class="start-stop__input"
// name = "start-stop-${id}"
// value = "start-${id}"
// data - identity="${id}"
//   />
//   <label for= "start-input" class= "start-stop__label" > Start < /label>
//     < input
//                 id = "stop-input"
//                 type = "radio"
// class="start-stop__input"
// name = "start-stop-${id}"
// value = "stop-${id}"
// data - identity="${id}"
//   />
//   <label for= "stop-input" class= "start-stop__label" > Stop < /label>
