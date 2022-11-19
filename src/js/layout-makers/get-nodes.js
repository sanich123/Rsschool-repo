export function getAudioNodes() {
  const questionAudio = document.querySelector(".question__audio");
  const questionPlay = document.querySelector(
    ".question .audio-container__play"
  );
  const totalDuration = document.querySelector(
    ".question .audio-container__duration"
  );
  const currentDuration = document.querySelector(
    ".question .audio-container__current-time"
  );
  const progress = document.querySelector(
    ".question .audio-container__duration-changer"
  );
  const muteBtn = document.querySelector(
    ".question .audio-container__mute-btn"
  );
  const volumeContainer = document.querySelector(
    ".question .audio-container__mute-wrapper"
  );
  const audioProgress = document.querySelector(
    ".question .audio-container__volume-changer"
  );

  const answerAudio = document.querySelector(".checked-answer__audio");
  const answerPlay = document.querySelector(
    ".checked-answer .audio-container__play"
  );
  const answerTotalDuration = document.querySelector(
    ".checked-answer .audio-container__duration"
  );
  const answerCurrentDuration = document.querySelector(
    ".checked-answer .audio-container__current-time"
  );
  const answerProgress = document.querySelector(
    ".checked-answer .audio-container__duration-changer"
  );
  const answerMuteBtn = document.querySelector(
    ".checked-answer .audio-container__mute-btn"
  );
  const answerVolumeContainer = document.querySelector(
    ".checked-answer .audio-container__mute-wrapper"
  );
  const answerAudioProgress = document.querySelector(
    ".checked-answer .audio-container__volume-changer"
  );
  return {
    questionAudio,
    questionPlay,
    totalDuration,
    currentDuration,
    progress,
    muteBtn,
    volumeContainer,
    audioProgress,
    answerAudio,
    answerPlay,
    answerTotalDuration,
    answerCurrentDuration,
    answerProgress,
    answerMuteBtn,
    answerVolumeContainer,
    answerAudioProgress,
  };
}
