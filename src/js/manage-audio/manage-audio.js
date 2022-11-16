import { createPauseIcon } from "../layout-makers/create-icons";
import { getSeconds } from "../utils/helpers";

export function setAudio() {
  const questionAudio = document.querySelector(".question__audio");
  const answerAudio = document.querySelector(".checked-answer__audio");
  const questionPlay = document.querySelector(".question .audio-container__play");
  const answerPlay = document.querySelector(".checked-answer .audio-container__play");
  const totalDuration = document.querySelector(".question .audio-container__duration");
  const currentDuration = document.querySelector('.question .audio-container__current-time');
  const progress = document.querySelector('.audio-container__duration-changer');

  questionAudio.addEventListener("loadeddata", () => {
    totalDuration.textContent = getSeconds(questionAudio.duration);
    progress.value = 0;
    progress.max = Math.floor(+questionAudio.duration);
  });
  progress.addEventListener('change', ({target}) => {
    questionAudio.currentTime = target.value;
    currentDuration.textContent = getSeconds(target.value);
  })

  questionPlay.addEventListener("click", () => {
    if (questionPlay.classList.contains("play")) {
      questionPlay.classList.remove("play");
      questionPlay.classList.add("pause");
      questionAudio.play();
      setInterval(() => {
        progress.value = questionAudio.currentTime;
        progress.step = questionAudio.duration / 100;
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
