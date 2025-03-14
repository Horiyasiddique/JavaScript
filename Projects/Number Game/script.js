// 1st task is t generate random number
let randomNumber = parseInt(Math.random() * 50 + 1);
const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guess-field");
const guessesSlot = document.querySelector(".guesses");
const remainingAttempts = document.querySelector(".last-results");
const LowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector("#results");
const p = document.createElement("p");
let previousGuesses = [];
let numberOfAttempts = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
//to check user input is valid or not
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please a number greater than 1");
  } else if (guess > 50) {
    alert("Please enter a number less than 50");
  } else {
    previousGuesses.push(guess);
    if (numberOfAttempts == 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//to check user guess is correct or wrong
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Great! You guessed it right🎉🎉`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is tooo low👇🏻 `);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is tooo high `);
  }
}

//to display guess of user , update array of prviousGuess and updaye remaining Attempts
function displayGuess(guess) {
  userInput.value = "";
  guessesSlot.innerHTML += `${guess}  `;
  numberOfAttempts++;
  remainingAttempts.innerHTML = `${11 - numberOfAttempts}`;
}

//to display message
function displayMessage(message) {
  LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="startNewGame">Start New Game</h2>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector("#startNewGame");
  newgameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 50 + 1);
    previousGuesses = [];
    numberOfAttempts = 1;
    guessesSlot.innerHTML = ``;
    remainingAttempts.innerHTML = `${11 - numberOfAttempts}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
