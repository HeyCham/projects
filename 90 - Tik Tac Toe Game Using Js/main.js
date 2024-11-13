const btns = document.querySelectorAll('.turns');
const msgWins = document.querySelector('.msg-wins');
const turnSpan = document.querySelector('#turn');
const paraDraw = document.querySelector('#para');

let originalColors = [];
let turn = 'X';
let isGameOver = false;

btns.forEach((btn) => {
  originalColors.push({
    backgroundColor: btn.style.backgroundColor,
    color: btn.style.color,
  });

  btn.addEventListener('click', () => {
    if (!isGameOver && btn.innerHTML.trim() === '') {
      btn.innerHTML = turn;
      btn.style.backgroundColor = turn === 'X' ? '#FF2E63' : '#007dff';
      

      if (checkWin()) {
        const winningCombination = getWinningCombination();
        highlightWinningCombination(winningCombination);
        msgWins.style.visibility = 'visible';
        turnSpan.innerHTML = turn + ' ';
        turnSpan.style.color = 'orange';
        isGameOver = true;
      } else if (checkDraw()) {
        msgWins.style.visibility = 'visible';
        paraDraw.innerHTML = "It's a draw!";
        isGameOver = true;
      } else {
        changeTurn();
      }
    }
  });
});

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return btns[a].innerHTML !== '' &&
      btns[a].innerHTML === btns[b].innerHTML &&
      btns[b].innerHTML === btns[c].innerHTML;
  });
}

function getWinningCombination() {
  const winningCombinations = [
    // Rows
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // Columns
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // Diagonals
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      btns[a].innerHTML !== '' &&
      btns[a].innerHTML === btns[b].innerHTML &&
      btns[b].innerHTML === btns[c].innerHTML
    ) {
      return combination;
    }
  }

  return null;
};

// For highlights the winning Combination 

function highlightWinningCombination(combination) {
  if (combination) {
    const [a, b, c] = combination;
    btns[a].style.backgroundColor = 'orange';
    btns[a].style.color = 'black';
    btns[b].style.backgroundColor = 'orange';
    btns[b].style.color = 'black';
    btns[c].style.backgroundColor = 'orange';
    btns[c].style.color = 'black';
    btns.forEach((btn, index) => {
      if (![a, b, c].includes(index)) {
        btn.style.backgroundColor = '';
        btn.style.color = '';
      }
    });
  }
}

function checkDraw() {
  return Array.from(btns).every(btn => btn.innerHTML !== '');
}

function changeTurn() {
  turn = turn === 'X' ? 'O' : 'X';
}

function reStart() {
  const reStartBtn = document.querySelector('.restart');
  const btnBox = document.querySelectorAll('.turns');
  
  reStartBtn.addEventListener('click', () => {
    btnBox.forEach((btn, index) => {
      btn.innerHTML = '';
      btn.style.backgroundColor = originalColors[index].backgroundColor;
      btn.style.color = originalColors[index].color;
    });
    msgWins.style.visibility = 'hidden';
    paraDraw.innerHTML = ''; 
    isGameOver = false;
    turn = 'X';
  });
}

reStart();

