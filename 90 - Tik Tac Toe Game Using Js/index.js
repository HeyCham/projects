/*
let boxes = document.querySelectorAll('.turns');
let restartBtn = document.querySelector('.restart');
let paraWins = document.querySelector('#para');
let paraTurn = document.querySelector('#turn');

let turn = 'X';
let isGameOver = false;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML === '' && !isGameOver) {
      box.innerHTML = turn;
      box.style.color = turn === 'X' ? 'aqua' : '#ffdb58';
      turn = turn === 'X' ? 'O' : 'X';
      box.disabled = true;
      let isWinner = checkWins();
      checkDraw();
    }
  });
});

function checkWins() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let comb of combinations) {
    let pos1Val = boxes[comb[0]].innerHTML;
    let pos2Val = boxes[comb[1]].innerHTML;
    let pos3Val = boxes[comb[2]].innerHTML;

    if (pos1Val !== '' && pos1Val === pos2Val && pos2Val === pos3Val) {
      paraWins.style.visibility = 'visible';
      paraTurn.innerHTML = pos1Val + ' ';
      paraTurn.style.color = '#ffdb58';
      isGameOver = true;
      combinationsColor(comb);
      break;
    }
  }
}

function restart() {
  boxes.forEach((box) => {
    box.innerHTML = '';
    box.disabled = false;
    box.style.backgroundColor = ''; // Reset background color
  });
  turn = 'X';
  isGameOver = false;
  paraWins.style.visibility = 'hidden';
  count = 0; // Reset the count on restart
}

restartBtn.addEventListener('click', restart);

function combinationsColor(winningCombination) {
  for (let index of winningCombination) {
    boxes[index].style.backgroundColor = '#FF2E63';
    boxes[index].style.color = '#F0F3FF';
    boxes[index].style.fontWeight = 'bold';
  }
}

function checkDraw() {
  count++;
  if (count === 9 && !isGameOver) {
    let msgWins = document.querySelector('.msg-wins')
    msgWins.style.visibility = 'visible';
    paraWins.innerHTML = 'Game was a Draw! ';
   
    boxes.forEach((box) => {
      box.disabled = true;
    });
  }
}
*/

/*
let boxes = document.querySelectorAll('.turns');
let restartBtn = document.querySelector('.restart');
let paraWins = document.querySelector('#para');
let paraTurn = document.querySelector('#turn');
let outputBox = document.querySelector('.output-box')
let gameContainer= document.querySelector('.game-container');
let paraCong = document.querySelector('#para-cong');
let turnCong = document.querySelector('#turn-cong');
console.log(turnCong)
let boxOutput = document.querySelector(' box');

let turn = 'X';
let isGameOver = false;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML === '' && !isGameOver) {
      box.innerHTML = turn;
      box.style.color = turn === 'X' ? 'aqua' : '#ffdb58';
      turn = turn === 'X' ? 'O' : 'X';
      box.disabled = true;
      let isWinner = checkWins();
      checkDraw();
    }
  });
});

function checkWins() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let comb of combinations) {
    let pos1Val = boxes[comb[0]].innerHTML;
    let pos2Val = boxes[comb[1]].innerHTML;
    let pos3Val = boxes[comb[2]].innerHTML;

    if (pos1Val !== '' && pos1Val === pos2Val && pos2Val === pos3Val) {
      paraWins.style.visibility = 'visible';
      //paraTurn.innerHTML = pos1Val + ' ';
      paraTurn.style.color = '#ffdb58';
      gameContainer.style.filter = 'blur(10px)';
      outputBox.style.display = 'block';
      restartBtn.style.visibility = 'hidden';
      boxOutput.style.visibility= 'visible';
      turnCong.innerHTML = pos1Val;
      isGameOver = true;
      combinationsColor(comb);
      break;
    }
  }
}

function restart() {
  boxes.forEach((box) => {
    box.innerHTML = '';
    box.disabled = false;
    box.style.backgroundColor = ''; // Reset background color
  });
  turn = 'X';
  isGameOver = false;
  paraWins.style.visibility = 'hidden';
  outputBox.style.display = 'none';
  gameContainer.style.filter = '';
  count = 0; // Reset the count on restart
}

restartBtn.addEventListener('click', restart);

function combinationsColor(winningCombination) {
  for (let index of winningCombination) {
    boxes[index].style.backgroundColor = '#FF2E63';
    boxes[index].style.color = '#F0F3FF';
    boxes[index].style.fontWeight = 'bold';
  }
}

function checkDraw() {
  count++;
  if (count === 9 && !isGameOver) {
    let msgWins = document.querySelector('.msg-wins')
    msgWins.style.visibility = 'visible';
    paraWins.innerHTML = 'Game was a Draw! ';
   
    boxes.forEach((box) => {
      box.disabled = true;
    });
  }
}

*/



let boxes = document.querySelectorAll('.turns');
let restartBtn = document.querySelector('.restart');
let paraWins = document.querySelector('#para');
let paraTurn = document.querySelector('#turn');
let outputBox = document.querySelector('.output-box');
let gameContainer = document.querySelector('.game-container');
let paraCong = document.querySelector('#para-cong');
let turnCong = document.querySelector('#turn-cong');
let msgWins = document.querySelector('.msg-wins');

let turn = 'X';
let isGameOver = false;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML === '' && !isGameOver) {
      box.innerHTML = turn;
      box.style.color = turn === 'X' ? 'aqua' : '#ffdb58';
      turn = turn === 'X' ? 'O' : 'X';
      box.disabled = true;
      let isWinner = checkWins();
      checkDraw();
    }
  });
});

function checkWins() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let comb of combinations) {
    let pos1Val = boxes[comb[0]].innerHTML;
    let pos2Val = boxes[comb[1]].innerHTML;
    let pos3Val = boxes[comb[2]].innerHTML;

    if (pos1Val !== '' && pos1Val === pos2Val && pos2Val === pos3Val) {
      
      paraTurn.style.color = '#ffdb58';
      gameContainer.style.filter = 'blur(9px)';
      
      outputBox.style.display = 'block';
      restartBtn.style.visibility = 'hidden';
      turnCong.innerHTML = pos1Val +' ';
      turnCong.style.color = '#ffdb58'
      isGameOver = true;
      combinationsColor(comb);
      break;
    }
  }
}

function restart() {
  boxes.forEach((box) => {
    box.innerHTML = '';
    box.disabled = false;
    box.style.backgroundColor = '';
  });
  turn = 'X';
  isGameOver = false;
  paraWins.style.visibility = 'hidden';
  outputBox.style.display = 'none';
  restartBtn.style.visibility = 'visible';
  gameContainer.style.filter = '';
  count = 0;
}

restartBtn.addEventListener('click', restart);

function combinationsColor(winningCombination) {
  for (let index of winningCombination) {
    boxes[index].style.backgroundColor = '#FF2E63';
    boxes[index].style.color = '#F0F3FF';
    boxes[index].style.fontWeight = 'bold';
  }
}

function checkDraw() {
  count++;
  if (count === 9 && !isGameOver) {
    msgWins.style.visibility = 'visible';
    paraWins.innerHTML = 'Game was a Draw!';

    boxes.forEach((box) => {
      box.disabled = true;
    });
  }
}
