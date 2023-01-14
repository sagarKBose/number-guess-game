'use strict';

let actualNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 20;

document.querySelector('.check').addEventListener('click', function () {
  var guessedNumber = document.querySelector('.guess').value;
  checkGuessedNumberWithActualNumber(guessedNumber);
});

document.querySelector('.again').addEventListener('click', function () {
  againBtnHandler();
});

const checkGuessedNumberWithActualNumber = function (guessedNum) {
  if (!guessedNum) {
    displayMessage('No Number Selected!');
  } else if (guessedNum == actualNumber) {
    correctGuessHandler(guessedNum, actualNumber);
  } else if (guessedNum !== actualNumber) {
    incorrectGuessHandler(guessedNum, actualNumber);
  }
};

const againBtnHandler = function () {
  actualNumber = Math.trunc(Math.random() * 20 + 1);
  if (score != 0) score = 20;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const correctGuessHandler = function (guessedNum, actualNumber) {
  displayMessage('🥳 Correct Guess!');
  highScore = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = actualNumber;
};

const incorrectGuessHandler = function (guessedNum, actualNumber) {
  if (score > 0) {
    displayMessage(
      guessedNum > actualNumber ? '📈 Guess Too High!' : '📉 Guess Too Low!'
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥Oops! you lost the game.');
    document.querySelector('.score').textContent = 0;
  }
};
