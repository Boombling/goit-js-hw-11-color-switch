const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startRef = document.querySelector('[data-action=start]');
const stopRef = document.querySelector('[data-action=stop]');
const color = colors.length - 1;
startRef.addEventListener('click', startChangeBgc);
stopRef.addEventListener('click', stopChangeBgc);

let changColor = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBcg() {
  const randomColors = randomIntegerFromInterval(0, color);
  document.body.style.backgroundColor = colors[randomColors];
}

function startChangeBgc() {
  if (startRef) {
    changeColor = setInterval(changeBcg, 1000);
    startRef.setAttribute("disabled", true);
    return
  }
}

function stopChangeBgc() {
  clearInterval(changeColor);
  startRef.removeAttribute("disabled", true);
}
