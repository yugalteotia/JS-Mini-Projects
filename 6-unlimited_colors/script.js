const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.querySelector("body");
let colorChangeIntervalId;

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
  colorChangeIntervalId = setInterval(changeColor, 750);
};

const stopColorChange = function () {
  clearInterval(colorChangeIntervalId);
  colorChangeIntervalId = null;
};

startBtn.addEventListener("click", colorChangeInterval);
stopBtn.addEventListener("click", stopColorChange);
