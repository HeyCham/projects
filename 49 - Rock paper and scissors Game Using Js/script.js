const boxItems = document.querySelectorAll('.box');
const compInput = document.querySelector('#comp-wins');
const userInput = document.getElementById('user-wins');
const showResult = document.querySelector('.show-results');

let userCount = 1;
let compCount = 1;

const showWinner = (userWins) => {
  if (userWins) {
    showResult.innerHTML = 'You Wins!';
    userInput.innerHTML = userCount;
    userCount++;
  } else {
    showResult.innerHTML = 'You lose!';
    compInput.innerHTML = compCount;
    compCount++;
  }
};

const playGame = (userChoice, compChoice) => {

  if (userChoice === compChoice) {
    showResult.innerHTML = 'Game was a draw!';
    showResult.classList.add('shake');

    // Remove shake class after 5 seconds
    setTimeout(() => {
      showResult.classList.remove('shake');
    }, 500);
  } else {
    let userWins = false;

    if (userChoice === 'rock') {
      userWins = compChoice === 'scissor';
    } else if (userChoice === 'paper') {
      userWins = compChoice === 'rock';
    } else {
      userWins = compChoice === 'paper';
    }

    showWinner(userWins);
  }
};

const compChoice = () => {
  const choices = ['rock', 'paper', 'scissor'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

boxItems.forEach((box) => {
  box.addEventListener('click', () => {
    const userChoice = box.getAttribute('id');
    const getCompChoice = compChoice(); // Call compChoice only once
    playGame(userChoice, getCompChoice);
  });
});
