let randomNumber = parseInt(Math.random() * 100 + 1);
const guesses = document.querySelector(".guess-fild");
const lastResult = document.querySelector(".last-result");
const lowOrHigh = document.querySelector(".low-or-high");
const guessInput = document.querySelector(".guesses");
const submit = document.querySelector(".submit-btn");
const result = document.querySelector(".result");
lastResult.innerHTML = `10 attempts left`;
let guessCount = 1;
let previousGuesses = [];
let playGame = true;
const pi = document.createElement("p");

console.log(randomNumber);

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guesses.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    // return false;
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a valid number");
    // return false;
  } else {
    previousGuesses.push(guess);
    if (guessCount === 10) {
      displayMessage("Game Over! You have no more attempts");
      displayGuesses(guess);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations! You got it right!");
    // lowOrHigh.style.backgroundColor = "green";
    resetGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guess is Too low!");
    // lastResult.style.backgroundColor = "red";
  } else if (guess > randomNumber) {
    displayMessage("Your guess isToo high!");
  }
}

function displayGuesses(guess) {
  guesses.value = "";
  guessInput.textContent += `${guess} `;
  guessCount++;
  lastResult.innerHTML = `${11 - guessCount} attempts left`;
}

function displayMessage(message) {
  lowOrHigh.textContent = `${message}`;
}

function endGame() {
  guesses.value = "";
  guesses.setAttribute("disabled", "disabled");
  pi.classList.add("button");
  pi.innerHTML = `<button id="newGame">Start New Game</button>`;
  result.appendChild(pi);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    guessCount = 1;
    guesses.removeAttribute("disabled");
    guessInput.innerHTML = "";
    lastResult.innerHTML = `10 attempts left`;
    lowOrHigh.textContent = "";
    result.removeChild(pi);
    playGame = true;
  });
}

function resetGame() {
  const ne = document.querySelectorAll("#newGame");
  ne.addEventListener("click", function (e) {
    previousGuesses = [];
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses.removeAttribute("disabled");
    guessInput.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess} `;
    result.removeChild(p);
    playGame = true;
  });
}
