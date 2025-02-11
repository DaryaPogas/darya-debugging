const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
    if (guess < 1 || guess > 99) {
      alert('Enter a valid number - from 1 to 99')
      return
  }
  attempts ++;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = 'block';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    correctMessage.style.display = 'block';

    submitButton.disabled = true;
    guessInput.disabled = true;
    resetButton.style.display = 'block'
  } else {
    if (guess < targetNumber) {
      tooLowMessage.style.display = 'block'
    }
      else {tooHighMessage.style.display = 'block';
    }
  }
  
    const remainingAttempts = maxNumberOfAttempts - attempts;
    numberOfGuessesMessage.style.display = 'block';

    if (remainingAttempts === 1){
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
    } else { numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;}
    

  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
    maxGuessesMessage.style.display = 'block'
    numberOfGuessesMessage.innerText = '0 guesses remaining'
    resetButton.style.display = 'block'
  }
  guessInput.value = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  attempts = 0;
  submitButton.disabled = false;
  guessInput.disabled = false;


  hideAllMessages();
  resetButton.style.display = 'none';
  guessInput.value = '';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
