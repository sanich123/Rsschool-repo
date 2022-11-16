import { getSeconds } from "../utils/helpers";

export function setAudio() {
  const questionAudio = document.querySelector(".question__audio");
  const answerAudio = document.querySelector(".checked-answer__audio");
  const questionPlay = document.querySelector(".question .audio-container__play");
  const answerPlay = document.querySelector(".checked-answer .audio-container__play");
  const totalDuration = document.querySelector(".question .audio-container__duration");
  const currentDuration = document.querySelector('.question .audio-container__current-time');
  const progress = document.querySelector('.audio-container__duration-changer');
  const muteBtn = document.querySelector('.audio-container__mute-btn');
  const volumeContainer = document.querySelector('.audio-container__mute-wrapper');
  const audioProgress = document.querySelector('.audio-container__volume-changer');

  muteBtn.addEventListener('click', () => {
    if (muteBtn.classList.contains('unmuted')) {
      muteBtn.classList.remove('unmuted');
      muteBtn.classList.add('muted');
      questionAudio.muted = true;
    } else {
      muteBtn.classList.remove('muted');
      muteBtn.classList.add('unmuted');
      questionAudio.muted = false;
    }
  });
  volumeContainer.addEventListener('mouseenter', () => {
    audioProgress.classList.add('is-open');
  });
  volumeContainer.addEventListener('mouseleave', () => {
    audioProgress.classList.remove('is-open');
  })
  audioProgress.addEventListener('input', ({target}) => {
    questionAudio.volume = target.value;
    if (+target.value === 0) {
      muteBtn.classList.remove('unmuted');
      muteBtn.classList.add('muted');
    } else if (muteBtn.classList.contains('muted')) {
      muteBtn.classList.remove('muted');
      muteBtn.classList.add('unmuted');
    }
  });

  questionAudio.addEventListener("loadeddata", () => {
    totalDuration.textContent = getSeconds(questionAudio.duration);
    questionAudio.volume = '1';
    progress.value = 0;
    progress.max = Math.floor(+questionAudio.duration);
    progress.step = questionAudio.duration / 100;
  });
  progress.addEventListener('input', ({target}) => {
    questionAudio.currentTime = target.value;
    currentDuration.textContent = getSeconds(target.value);
  });

  questionPlay.addEventListener("click", () => {
    if (questionPlay.classList.contains("play")) {
      questionPlay.classList.remove("play");
      questionPlay.classList.add("pause");
      questionAudio.play();
      setInterval(() => {
        progress.value = questionAudio.currentTime;
        currentDuration.textContent = getSeconds(questionAudio.currentTime);
      }, 1000);
    } else {
      questionPlay.classList.remove("pause");
      questionPlay.classList.add("play");
      questionAudio.pause();
    }
  });

  if (answerPlay) {
    answerPlay.addEventListener("click", () => {
      answerAudio.play();
    });
  }
}
