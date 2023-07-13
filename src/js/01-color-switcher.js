
const selectors = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
}
// console.log(selectors);

let id = null;

selectors.btnStart.addEventListener('click', hendlerChangeColorOn);
selectors.btnStop.addEventListener('click', hendlerChangeColorOff);

function hendlerChangeColorOn(evt) {
selectors.btnStart.disabled = true;
selectors.btnStop.disabled = false;
  
id = setInterval(() => {
    selectors.body.style.background = getRandomHexColor()
}, 1000)
}

function hendlerChangeColorOff() {
   clearInterval(id);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}