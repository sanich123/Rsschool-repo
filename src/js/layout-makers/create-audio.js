export function createAudio(audio, place) {
  return `<div class="audio-container">
        <button class="audio-container__play play"></button>
        <div class="audio-container__duration-container">
        <input class="audio-container__duration-changer" type="range"/>
        <span class="audio-container__duration">05:39</span>
        <span class="audio-container__current-time">00:00</span>
        </div>
        <input class="audio-container__volume-changer" type="range" value="0" min="0" step="0"max="100"/>
        <audio class="${place}__audio" src="${audio}"><audio/></div>`;
}
