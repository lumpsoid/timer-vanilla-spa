import { registerSW } from "virtual:pwa-register";

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

document.addEventListener('DOMContentLoaded', () => {
  let timerId = 0;
  let count = 0;

  const timerCountElement = document.getElementById('timer-count');

  const audioElement = document.getElementById('audio');

  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');

  const timerSvgElement = document.getElementById('alarm-image');
  const setTimerButton = document.getElementById('set-timer-button');
  const stopTimerButton = document.getElementById('stop-timer-button');

  const loadAudio = () => {
    audioElement.load();
  };
  loadAudio();

  function isVibrating() {
    return timerSvgElement.classList.contains('vibrate')
  }

  function toggleVibration() {
    timerSvgElement.classList.toggle('vibrate');
  }

  function toggleImage() {
    if (timerSvgElement.style.display === 'none') {
      timerSvgElement.style.display = 'block';
    } else {
      timerSvgElement.style.display = 'none';
    }
  }

  const playAudio = () => {
    audioElement.play();
    toggleImage();
  };

  const resetAudio = () => {
    audioElement.pause();
    audioElement.currentTime = 0;
  };

  const clearTimeVariables = () => {
    timerCountElement.textContent = 0;
    count = 0;
    timerId = 0;
  };

  const startTimer = () => {
    timerId = setInterval(() => {
      if (count !== 0) {
        count--;
        timerCountElement.textContent = count;
      } else {
        playAudio();
        clearInterval(timerId);
        clearTimeVariables();
        toggleVibration();
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (timerId !== 0) {
      clearInterval(timerId);
      resetAudio();
      clearTimeVariables();
    }
  };

  const resetTimeInput = () => {
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
  };

  const parseIntoCount = () => {
    const hours = parseInt(hoursInput.value, 10) || 0;
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;
    count = hours * 3600 + minutes * 60 + seconds;
    return count;
  };

  function setupTimer() {
    const count = parseIntoCount();

    if (count === 0) {
      resetTimeInput();
      return;
    }

    if (isVibrating()) {
      toggleImage();
      toggleVibration();
    }

    if (timerId !== 0) {
      clearInterval(timerId);
    }

    resetAudio();

    timerCountElement.textContent = count;
    startTimer();
    resetTimeInput();
  }

  function endVisulaNotification() {
    resetAudio();
    toggleImage();
    toggleVibration();
  }

  function handleInputEnter(event) {
    if (event.key === 'Enter') {
      setupTimer();
      // Unfocus the input field
      event.target.blur();
    }
  }

  // Add event listener to the input field
  hoursInput.addEventListener('keydown', handleInputEnter);
  minutesInput.addEventListener('keydown', handleInputEnter);
  secondsInput.addEventListener('keydown', handleInputEnter);

  setTimerButton.addEventListener('click', setupTimer);

  timerSvgElement.addEventListener('click', endVisulaNotification);

  stopTimerButton.addEventListener('click', stopTimer);
});
