import { getSeconds } from "../utils/helpers";
import { getAudioNodes } from "../layout-makers/get-nodes.js";

export function setAudio() {
  const {
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
  } = getAudioNodes();

  if (answerPlay) {
    answerPlay.addEventListener("click", () => {
      if (answerPlay.classList.contains("play")) {
        answerPlay.classList.remove("play");
        answerPlay.classList.add("pause");
        answerAudio.play();
        setInterval(() => {
          answerProgress.value = answerAudio.currentTime;
          answerCurrentDuration.textContent = getSeconds(
            answerAudio.currentTime
          );
        }, 1000);
      } else {
        answerPlay.classList.remove("pause");
        answerPlay.classList.add("play");
        answerAudio.pause();
      }
    });

    answerMuteBtn.addEventListener("click", () => {
      if (answerMuteBtn.classList.contains("unmuted")) {
        answerMuteBtn.classList.remove("unmuted");
        answerMuteBtn.classList.add("muted");
        answerAudio.muted = true;
      } else {
        answerMuteBtn.classList.remove("muted");
        answerMuteBtn.classList.add("unmuted");
        answerAudio.muted = false;
      }
    });

    answerVolumeContainer.addEventListener("mouseenter", () =>
      answerAudioProgress.classList.add("is-open")
    );
    answerVolumeContainer.addEventListener("mouseleave", () =>
      answerAudioProgress.classList.remove("is-open")
    );

    answerAudioProgress.addEventListener("input", ({ target }) => {
      answerAudio.volume = target.value;
      if (+target.value === 0) {
        answerMuteBtn.classList.remove("unmuted");
        answerMuteBtn.classList.add("muted");
      } else if (answerMuteBtn.classList.contains("muted")) {
        answerMuteBtn.classList.remove("muted");
        answerMuteBtn.classList.add("unmuted");
      }
    });
    answerAudio.addEventListener("loadeddata", () => {
      answerTotalDuration.textContent = getSeconds(answerAudio.duration);
      answerAudio.volume = "1";
      answerProgress.value = 0;
      answerProgress.max = Math.floor(+answerAudio.duration);
      answerProgress.step = answerAudio.duration / 100;
    });
    answerProgress.addEventListener("input", ({ target }) => {
      answerAudio.currentTime = target.value;
      answerCurrentDuration.textContent = getSeconds(target.value);
    });
  }
  if (questionPlay) {
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

    muteBtn.addEventListener("click", () => {
      if (muteBtn.classList.contains("unmuted")) {
        muteBtn.classList.remove("unmuted");
        muteBtn.classList.add("muted");
        questionAudio.muted = true;
      } else {
        muteBtn.classList.remove("muted");
        muteBtn.classList.add("unmuted");
        questionAudio.muted = false;
      }
    });

    volumeContainer.addEventListener("mouseenter", () =>
      audioProgress.classList.add("is-open")
    );
    volumeContainer.addEventListener("mouseleave", () =>
      audioProgress.classList.remove("is-open")
    );

    audioProgress.addEventListener("input", ({ target }) => {
      questionAudio.volume = target.value;
      if (+target.value === 0) {
        muteBtn.classList.remove("unmuted");
        muteBtn.classList.add("muted");
      } else if (muteBtn.classList.contains("muted")) {
        muteBtn.classList.remove("muted");
        muteBtn.classList.add("unmuted");
      }
    });

    questionAudio.addEventListener("loadeddata", () => {
      totalDuration.textContent = getSeconds(questionAudio.duration);
      questionAudio.volume = "1";
      progress.value = 0;
      progress.max = Math.floor(+questionAudio.duration);
      progress.step = questionAudio.duration / 100;
    });

    progress.addEventListener("input", ({ target }) => {
      questionAudio.currentTime = target.value;
      currentDuration.textContent = getSeconds(target.value);
    });
  }
}
