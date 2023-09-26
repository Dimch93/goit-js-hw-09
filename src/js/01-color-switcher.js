const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', handleClickStart);
stoptBtn.addEventListener('click', handleClickStop);

let timer = null;

function handleClickStart() {
  timer = setInterval(getColor, 1000);

  startBtn.toggleAttribute('disabled');
}

function handleClickStop() {
  clearInterval(timer);

  startBtn.removeAttribute('disabled');
}

function getColor() {
  body.style.backgroundColor = getRandomHexColor();
}
