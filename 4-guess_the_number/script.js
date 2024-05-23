const usrInp = document.querySelector("#usrInput");
const submitBtn = document.querySelector("#submitBtn");
const message = document.querySelector("#message");
const usrGuesses = document.querySelector("#usrGuesses");
const remGuesses = document.querySelector("#remGuesses");
let generatedNumber = parseInt(Math.random() * 100 + 1);
let guessedArray = [];
let noOfGuesses = 0;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateGuess();
});

function validateGuess() {
  const userGuess = parseInt(usrInp.value);
  if (userGuess >= 1 && userGuess <= 100) {
    if (noOfGuesses++ < 10) {
      if (checkNumber(userGuess));
      startTheGame(userGuess);
    } else {
      displayMessage(
        "Game over! You've reached the maximum number of guesses.",
        true
      );
      setTimeout(() => {
        displayMessage(`The Game Will Restart in 5 seconds`, false);
        endGame();
      }, 5000);
    }
  } else {
    displayMessage("Please enter a valid number between 1 to 100", true);
  }
}

function startTheGame() {
  usrGuesses.textContent = guessedArray.join("  ");
  remGuesses.textContent = 10 - noOfGuesses;
}

function checkNumber(userGuess) {
  if (userGuess === generatedNumber) {
    displayMessage("Congo!!! You guessed the number correctly.");
    endGame();
    return true;
  } else if (userGuess > generatedNumber)
    displayMessage(
      "Your guessed number is greater than the original number",
      true
    );
  else
    displayMessage(
      "Your guessed number is smaller than the original number",
      true
    );

  guessedArray.push(usrInp.value);
  usrInp.value = "";
}

function displayMessage(str, warn) {
  if (warn) {
    message.setAttribute("style", "color: red;");
  } else {
    message.setAttribute("style", "color: lime;");
  }
  message.textContent = str;
  setTimeout(() => {
    message.textContent = "";
    message.setAttribute("style", "color: white;");
  }, 2500);
}

function endGame() {
  generatedNumber = parseInt(Math.random() * 100 + 1);
  guessedArray = [];
  noOfGuesses = 0;
}
