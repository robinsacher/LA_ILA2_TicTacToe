const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2], //1. Reihe
  [3, 4, 5], //2. Reihe
  [6, 7, 8], //3. Reihe
  [0, 3, 6], //1. Spalte
  [1, 4, 7], //2. Spalte
  [2, 5, 8], //3. Spalte
  [0, 4, 8], //1. Diagonale
  [2, 4, 6], //2. Diagonale
];
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.querySelector(".restartButton");
const winningMessageTextElement = document.querySelector(".winning-message p");
let circleTurn;
let againstComputer;

startGame();

restartButton.addEventListener("click", startGame);

function startGameAgainstPlayer() {
  againstComputer = false;
  startGame();
}

function startGameAgainstComputer() {
  againstComputer = true;
  startGame();
}

function startGame() {
  document.getElementById("menu").style.display = "flex";
  circleTurn = false;
  updateGameModeText();
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");

  if (againstComputer && circleTurn) {
    makeComputerMove();
  }
}

function updateGameModeText() {
  const gameModeTextElement = document.getElementById("gameModeText");
  gameModeTextElement.innerText = againstComputer ? "Computer" : "1 gegen 1";
}

function handleClick(e) {
  console.log("clicked");
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    if (againstComputer) {
      makeComputerMove();
    } else {
      swapTurns();
      setBoardHoverClass();
    }
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Unentschieden!";
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn ? "O" : "X"
    } hat gewonnen!`;
  }
  winningMessageElement.classList.add("show");
  document.getElementById("menu").style.display = "block";
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function makeComputerMove() {
  const emptyCells = [...cellElements].filter(
    (cell) =>
      !cell.classList.contains(X_CLASS) &&
      !cell.classList.contains(CIRCLE_CLASS)
  );

  // Verwenden Sie den Minimax-Algorithmus, um den besten Zug zu finden
  const bestMove = getBestMove(emptyCells, circleTurn ? CIRCLE_CLASS : X_CLASS);
  const cell = emptyCells[bestMove.index];

  setTimeout(() => {
    placeMark(cell, circleTurn ? CIRCLE_CLASS : X_CLASS);

    if (checkWin(circleTurn ? CIRCLE_CLASS : X_CLASS) || isDraw()) {
      endGame(checkWin(circleTurn ? CIRCLE_CLASS : X_CLASS) ? false : true);
    } else {
      swapTurns();
      setBoardHoverClass();
    }
  }, 10000);
  en;
}

function getBestMove(emptyCells, player) {
  // Minimax algorithm
  const minimax = (board, depth, maximizingPlayer) => {
    const scores = {
      X: -1,
      O: 1,
      draw: 0,
    };

    if (checkWin(X_CLASS)) return scores.X - depth;
    if (checkWin(CIRCLE_CLASS)) return scores.O + depth;
    if (isDraw()) return scores.draw;

    const symbol = maximizingPlayer
      ? player
      : player === X_CLASS
      ? CIRCLE_CLASS
      : X_CLASS;
    let bestScore = maximizingPlayer ? -Infinity : Infinity;
    let bestMove;

    emptyCells.forEach((cell, index) => {
      const originalClass = cell.classList.value;
      cell.classList.add(symbol);

      const score = minimax(board, depth + 1, !maximizingPlayer);

      cell.classList.value = originalClass;

      if (
        (maximizingPlayer && score > bestScore) ||
        (!maximizingPlayer && score < bestScore)
      ) {
        bestScore = score;
        bestMove = index;
      }
    });

    return { score: bestScore, index: bestMove };
  };

  return minimax(emptyCells, 0, true);
}
