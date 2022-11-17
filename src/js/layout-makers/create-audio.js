export function createAudio(audio, place) {
  return `
  <div class="audio-container">
    <button class="audio-container__play play"></button>
    <div class="audio-container__duration-container">
      <input class="audio-container__duration-changer" type="range" min="0" value="0" max="100" />
      <span class="audio-container__duration">00:00</span>
      <span class="audio-container__current-time">00:00</span>
    </div>
    <div class="audio-container__mute-wrapper">
    <button class="audio-container__mute-btn unmuted"></button>
    <input class="audio-container__volume-changer" type="range" value="0.75" min="0" step="0.1" max="1"/>
    </div>
    <audio class="${place}__audio" src="${audio}"><audio/>
  </div>`;
}
