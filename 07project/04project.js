let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const input = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuesses = document.querySelector(".guesses");
const remainingSlots = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const result = document.querySelector(".resultParas");
const p = document.createElement("p");
let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const num = parseInt(input.value);
    validation(num);
  });
}

function validation(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number greater then 0");
  } else if (guess > 100) {
    alert("please enter a number smaller then 101");
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      cleanUp(guess);
      displayMessage(`Game Over The Number Is ${randomNumber}`);
      endGame();
    } else {
      cleanUp(guess);
      checkGuesses(guess);
    }
  }
}

function checkGuesses(guess) {
  if (guess === randomNumber) {
    displayMessage("Your Guessed Is Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("The Number Is Too Low");
  } else if (guess > randomNumber) {
    displayMessage("The Number Is Too High");
  }
}

function cleanUp(guess) {
  input.value = "";
  prevGuesses.innerHTML += `${guess}; `;
  numGuess++;
  remainingSlots.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add = "button";
  p.innerHTML = '<button id = "button">Start Over</button>';
  result.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const button = document.querySelector("#button");
  button.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    // console.log(randomNumber);
    preGuess = [];
    numGuess = 1;
    prevGuesses.innerHTML = "";
    remainingSlots.innerHTML = `${11 - numGuess}`;
    input.removeAttribute("disabled");
    result.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
