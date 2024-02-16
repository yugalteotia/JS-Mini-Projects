const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.querySelector("body");
let colorChangeIntervalId = null;

const hexArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function generateRandomNumber() {
  return parseInt(Math.random() * 100) % 16;
}

function generateColorString() {
  let colorString = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = generateRandomNumber();
    colorString += hexArr[randomNumber];
  }
  return colorString;
}

const changeColor = function () {
  body.style.backgroundColor = generateColorString();
};

const colorChangeInterval = function () {
  // this check make sures that start button works only once until stopped.
  // if we dont do this and user clicks start button multiple times,
  // pressing stop will only stop the change of color for one interval only.
  if (!colorChangeIntervalId) {
    colorChangeIntervalId = setInterval(changeColor, 500);
  }
};

const stopColorChange = function () {
  clearInterval(colorChangeIntervalId);
  colorChangeIntervalId = null;
};

startBtn.addEventListener("click", colorChangeInterval);
stopBtn.addEventListener("click", stopColorChange);
