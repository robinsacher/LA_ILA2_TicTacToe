//Spielmodi auswählen
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Anleitung").style.display = "none";
  document.getElementById("Computer").style.display = "none";
  document.getElementById("1vs1").style.display = "none";
  document.getElementById("TicTacToe").style.display = "none";

  document
    .querySelector('a[href="#Anleitung"]')
    .addEventListener("click", function () {
      showView("Anleitung");
    });

  document
    .querySelector('a[href="#Computer"]')
    .addEventListener("click", function () {
      showView("TicTacToe");
      initializeTicTacToe(true); // true, um gegen den Computer zu spielen
    });

  document
    .querySelector('a[href="#1vs1"]')
    .addEventListener("click", function () {
      showView("1vs1");
      initialize1vs1();
    });

  document
    .querySelector('a[href="#TicTacToe"]')
    .addEventListener("click", function () {
      showView("TicTacToe");
      initializeTicTacToe(false); 
    });

  const startButton1vs1 = document.querySelector('#1vs1 .animierter-button');
  startButton1vs1.addEventListener('click', start1vs1Game);

  const startButtonTicTacToe = document.querySelector('#TicTacToe .animierter-button');
  startButtonTicTacToe.addEventListener('click', startTicTacToeGame);
});

function showView(viewId) {
  document.getElementById("Anleitung").style.display = "none";
  document.getElementById("Computer").style.display = "none";
  document.getElementById("1vs1").style.display = "none";
  document.getElementById("TicTacToe").style.display = "none";

  document.getElementById(viewId).style.display = "block";
}

Neustart_Button.addEventListener("click", spielStarten);


//Spielfunktionen
spielStarten();
document.addEventListener('DOMContentLoaded', function () {
  const spielerX = 'X';
  const spielerO = 'O';
  let aktuellerSpieler = spielerX;
  let einzelspielerModus = false;

  const felder = document.querySelectorAll('.Feld');
  const startButton = document.querySelector('.animierter-button');
  startButton.addEventListener('click', startSpiel);

  function startSpiel() {
    einzelspielerModus = document.querySelector('#1vs1').style.display !== 'none';

    felder.forEach(feld => {
      feld.addEventListener('click', handleFeldClick, { once: true });
    });

    startButton.style.display = 'none';
  }

  function handleFeldClick(e) {
    const ausgewaehltesFeld = e.target;

    if (istFeldLeer(ausgewaehltesFeld)) {
      setzeSymbol(ausgewaehltesFeld, aktuellerSpieler);

      if (hatGewonnen()) {
        alert(spielBeenden());
        resetSpielbrett();
      } else if (istUnentschieden()) {
        alert('Unentschieden!');
        resetSpielbrett();
      } else {
        wechsleSpieler();

        if (einzelspielerModus && aktuellerSpieler === spielerO) {
          setTimeout(computerZug, 500);
        }
      }
    }
  }

  function istFeldLeer(feld) {
    return feld.innerText === '';
  }

  function setzeSymbol(feld, spieler) {
    feld.innerText = spieler;
  }

  function wechsleSpieler() {
    aktuellerSpieler = aktuellerSpieler === spielerX ? spielerO : spielerX;
  }

  function spielBeenden(){
    if(aktuelleKlasse === spieler) {
      Neustart_Text.innerText = "Spieler ${aktuellerSpieler} hat gewonnen!";
    }
    else {
      Neustart_Text.innerText = "${}hat gewonnen";
    }
    Neustart.classlist.add(Neustart_Sehbar);
  }

  const Neustart = "neustart";
  const Neustart_Text = "neustart-text";
  const Neustart_Button = "neustart-button";
  const Neustart_Sehbar = "neustar-sehbar";

  function hatGewonnen() {
    const gewinnKombinationen = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return gewinnKombinationen.some(kombination => {
      const [a, b, c] = kombination;
      return (
        felder[a].innerText !== '' &&
        felder[a].innerText === felder[b].innerText &&
        felder[a].innerText === felder[c].innerText
      );
    });
  }

  function istUnentschieden() {
    return Array.from(felder).every(feld => feld.innerText !== '');
  }

  function resetSpielbrett() {
    felder.forEach(feld => {
      feld.innerText = '';
    });
    aktuellerSpieler = spielerX;
  }

  function computerZug() {
    const leereFelder = Array.from(felder).filter(feld => istFeldLeer(feld));

    if (leereFelder.length > 0) {
      const zufaelligesFeld = leereFelder[Math.floor(Math.random() * leereFelder.length)];
      setzeSymbol(zufaelligesFeld, spielerO);

      if (hatGewonnen()) {
        alert(`Spieler ${spielerO} hat gewonnen!`);
        resetSpielbrett();
      } else if (istUnentschieden()) {
        alert('Unentschieden!');
        resetSpielbrett();
      } else {
        wechsleSpieler();
      }
    }
  }
});


