// DOM-Manipulation //
function updateGameModeText() {
  const gameModeTextElement = document.getElementById("gameModeText");
  const anleitungButton = document.getElementById("anleitung");

  if (againstComputer) {
    gameModeTextElement.innerText = "Gegen Computer";
  } else if (anleitungButton.style.display === "block") {
    gameModeTextElement.innerText = "1 gegen 1: Anleitung";
  } else {
    gameModeTextElement.innerText = "1 gegen 1";
  }
}

function startGameAgainstPlayer() {
  document.getElementById("anleitung").style.display = "none";
  document.getElementById("board").style.display = "grid";
  document.getElementById("gameModeText").style.display = "block";

  againstComputer = false;
  startGame();
}

function startGameAgainstComputer() {
  document.getElementById("anleitung").style.display = "none";
  document.getElementById("board").style.display = "grid";
  document.getElementById("gameModeText").style.display = "block";

  againstComputer = true;
  startGame();
}

function zeigeAnleitung() {
  document.getElementById("anleitung").style.display = "block";
  document.getElementById("board").style.display = "none";
  document.getElementById("gameModeText").style.display = "none";
}

function endGameAndReturnToMenu() {
  zeigeAnleitung();
  winningMessageElement.classList.remove("show");
}

const endButton = document.getElementById("endButton");
endButton.addEventListener("click", endGameAndReturnToMenu);

// Singleplayer
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
    var audio = new Audio("WinnerSound.mp3");
    audio.play();
    winningMessageTextElement.innerText = `${
      circleTurn ? "O" : "X"
    } hat gewonnen!`;
  }
  winningMessageElement.classList.add("show");
  document.getElementById("menu").style.display = "flex";
  endButton.style.display = "block";
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

//Multiplayer

function getBestMove(emptyCells, player) {
  // Minimax algorithm
  const minimax = (board, depth, alpha, beta, maximizingPlayer) => {
    const scores = {
      X: -1,
      O: 1,
      draw: 0,
    };

    if (checkWin(X_CLASS)) return scores.X - depth;
    if (checkWin(CIRCLE_CLASS)) return scores.O + depth;
    if (isDraw()) return scores.draw;

    if (maximizingPlayer) {
      let maxEval = -Infinity;
      let bestMoveIndex = null;

      board.forEach((cell, index) => {
        if (cellIsEmpty(cell)) {
          cell.classList.add(CIRCLE_CLASS);
          const eval = minimax(board, depth + 1, alpha, beta, false);
          cell.classList.remove(CIRCLE_CLASS);

          if (eval > maxEval) {
            maxEval = eval;
            bestMoveIndex = index;
          }

          alpha = Math.max(alpha, eval);
          if (beta <= alpha) return;
        }
      });

      return { index: bestMoveIndex, score: maxEval };
    } else {

    }
  };

  const result = minimax(emptyCells, 0, -Infinity, Infinity, true);
  return result;
}

function cellIsEmpty(cell) {
  return (
    !cell.classList.contains(X_CLASS) && !cell.classList.contains(CIRCLE_CLASS)
  );
}

function makeComputerMove() {
  let bestScore = -Infinity;
  let bestMove;

  cellElements.forEach((cell, index) => {
    if (cellIsEmpty(cell)) {
      cell.classList.add(CIRCLE_CLASS);
      const score = minimax(cellElements, 0, -Infinity, Infinity, false);
      cell.classList.remove(CIRCLE_CLASS);

      if (score > bestScore) {
        bestScore = score;
        bestMove = index;
      }
    }
  });

  if (bestMove != null) {
    cellElements[bestMove].classList.add(CIRCLE_CLASS);
    if (checkWin(CIRCLE_CLASS) || isDraw()) {
      endGame(checkWin(CIRCLE_CLASS) ? false : true);
    } else {
      swapTurns();
      setBoardHoverClass();
    }
  }
}
