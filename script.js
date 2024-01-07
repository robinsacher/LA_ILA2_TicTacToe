// DOM-Manipulation //
function aktualisiereSpielmodusText() {
  const spielmodusTextElement = document.getElementById("gameModeText");
  const anleitungButton = document.getElementById("anleitung");

  if (gegenComputer) {
    spielmodusTextElement.innerText = "Gegen Computer";
  } else if (anleitungButton.style.display === "block") {
    spielmodusTextElement.innerText = "1 gegen 1: Anleitung";
  } else {
    spielmodusTextElement.innerText = "1 gegen 1";
  }
}

function starteSpielGegenSpieler() {
  document.getElementById("anleitung").style.display = "none";
  document.getElementById("board").style.display = "grid";
  document.getElementById("gameModeText").style.display = "block";

  gegenComputer = false;
  starteSpiel();
}

function starteSpielGegenComputer() {
  document.getElementById("anleitung").style.display = "none";
  document.getElementById("board").style.display = "grid";
  document.getElementById("gameModeText").style.display = "block";

  gegenComputer = true;
  starteSpiel();
}

function zeigeAnleitung() {
  document.getElementById("anleitung").style.display = "block";
  document.getElementById("board").style.display = "none";
  document.getElementById("gameModeText").style.display = "none";
}

function beendeSpielUndKehreZumMenüZurück() {
  zeigeAnleitung();
  winningMessageElement.classList.remove("show");
}

const endButton = document.getElementById("endButton");
endButton.addEventListener("click", beendeSpielUndKehreZumMenüZurück);

// Einzelspieler
const X_KLASSE = "x";
const CIRCLE_KLASSE = "circle";
const GEWINNENDE_KOMBINATIONEN = [
  [0, 1, 2], //1. Reihe
  [3, 4, 5], //2. Reihe
  [6, 7, 8], //3. Reihe
  [0, 3, 6], //1. Spalte
  [1, 4, 7], //2. Spalte
  [2, 5, 8], //3. Spalte
  [0, 4, 8], //1. Diagonale
  [2, 4, 6], //2. Diagonale
];
const zellenElemente = document.querySelectorAll("[data-cell]");
const brett = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.querySelector(".restartButton");

const winningMessageTextElement = document.querySelector(".winning-message p");
let circleTurn;
let gegenComputer;

restartButton.addEventListener("click", starteSpiel);

function starteSpiel() {
  document.getElementById("menu").style.display = "flex";
  circleTurn = false;
  aktualisiereSpielmodusText();
  zellenElemente.forEach((zelle) => {
    zelle.classList.remove(X_KLASSE);
    zelle.classList.remove(CIRCLE_KLASSE);
    zelle.removeEventListener("click", handleClick);
    zelle.addEventListener("click", handleClick, { once: true });
  });
  setzeBrettHoverKlasse();
  winningMessageElement.classList.remove("show");

  if (gegenComputer && circleTurn) {
    macheComputerZug();
  }
}

function handleClick(e) {
  console.log("geklickt");
  const zelle = e.target;
  const aktuelleKlasse = circleTurn ? CIRCLE_KLASSE : X_KLASSE;
  platziereMarkierung(zelle, aktuelleKlasse);

  if (prüfeGewinn(aktuelleKlasse)) {
    beendeSpiel(false);
  } else if (istUnentschieden()) {
    beendeSpiel(true);
  } else {
    if (gegenComputer) {
      macheComputerZug();
    } else {
      wechsleRunden();
      setzeBrettHoverKlasse();
    }
  }
}

function platziereMarkierung(zelle, aktuelleKlasse) {
  zelle.classList.add(aktuelleKlasse);
}

function wechsleRunden() {
  circleTurn = !circleTurn;
}

function setzeBrettHoverKlasse() {
  brett.classList.remove(X_KLASSE);
  brett.classList.remove(CIRCLE_KLASSE);
  if (circleTurn) {
    brett.classList.add(CIRCLE_KLASSE);
  } else {
    brett.classList.add(X_KLASSE);
  }
}

function prüfeGewinn(aktuelleKlasse) {
  return GEWINNENDE_KOMBINATIONEN.some((kombination) => {
    return kombination.every((index) => {
      return zellenElemente[index].classList.contains(aktuelleKlasse);
    });
  });
}

function beendeSpiel(unentschieden) {
  if (unentschieden) {
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

function istUnentschieden() {
  return [...zellenElemente].every((zelle) => {
    return (
      zelle.classList.contains(X_KLASSE) ||
      zelle.classList.contains(CIRCLE_KLASSE)
    );
  });
}

// Multiplayer

function erhalteBestenZug(leereZellen, spieler) {
  // Minimax-Algorithmus
  const minimax = (brett, tiefe, alpha, beta, maximizingPlayer) => {
    const punkte = {
      X: -1,
      O: 1,
      unentschieden: 0,
    };

    if (prüfeGewinn(X_KLASSE)) return punkte.X - tiefe;
    if (prüfeGewinn(CIRCLE_KLASSE)) return punkte.O + tiefe;
    if (istUnentschieden()) return punkte.unentschieden;

    if (maximizingPlayer) {
      let maxEval = -Infinity;
      let besterZugIndex = null;

      brett.forEach((zelle, index) => {
        if (zelleIstLeer(zelle)) {
          zelle.classList.add(CIRCLE_KLASSE);
          const eval = minimax(brett, tiefe + 1, alpha, beta, false);
          zelle.classList.remove(CIRCLE_KLASSE);

          if (eval > maxEval) {
            maxEval = eval;
            besterZugIndex = index;
          }

          alpha = Math.max(alpha, eval);
          if (beta <= alpha) return;
        }
      });

      return { index: besterZugIndex, punktzahl: maxEval };
    } else {
      let minEval = Infinity;
      let besterZugIndex = null;

      brett.forEach((zelle, index) => {
        if (zelleIstLeer(zelle)) {
          zelle.classList.add(X_KLASSE);
          const eval = minimax(brett, tiefe + 1, alpha, beta, true);
          zelle.classList.remove(X_KLASSE);

          if (eval < minEval) {
            minEval = eval;
            besterZugIndex = index;
          }

          beta = Math.min(beta, eval);
          if (beta <= alpha) return;
        }
      });

      return { index: besterZugIndex, punktzahl: minEval };
    }
  };

  const ergebnis = minimax(leereZellen, 0, -Infinity, Infinity, true);
  return ergebnis;
}

function zelleIstLeer(zelle) {
  return (
    !zelle.classList.contains(X_KLASSE) &&
    !zelle.classList.contains(CIRCLE_KLASSE)
  );
}

function macheComputerZug() {
  let bestePunktzahl = -Infinity;
  let besterZug;

  zellenElemente.forEach((zelle, index) => {
    if (zelleIstLeer(zelle)) {
      zelle.classList.add(CIRCLE_KLASSE);
      const punktzahl = minimax(zellenElemente, 0, -Infinity, Infinity, false);
      zelle.classList.remove(CIRCLE_KLASSE);

      if (punktzahl > bestePunktzahl) {
        bestePunktzahl = punktzahl;
        besterZug = index;
      }
    }
  });

  if (besterZug != null) {
    zellenElemente[besterZug].classList.add(CIRCLE_KLASSE);
    if (prüfeGewinn(CIRCLE_KLASSE) || istUnentschieden()) {
      beendeSpiel(prüfeGewinn(CIRCLE_KLASSE) ? false : true);
    } else {
      wechsleRunden();
      setzeBrettHoverKlasse();
    }
  }
}
