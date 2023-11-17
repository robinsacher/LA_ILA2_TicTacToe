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
    });

  document
    .querySelector('a[href="#1vs1"]')
    .addEventListener("click", function () {
      showView("1vs1");
    });

  document
    .querySelector('a[href="#TicTacToe"]')
    .addEventListener("click", function () {
      showView("TicTacToe");
    });
});

function showView(viewId) {
  document.getElementById("Anleitung").style.display = "none";
  document.getElementById("Computer").style.display = "none";
  document.getElementById("1vs1").style.display = "none";
  document.getElementById("TicTacToe").style.display = "none";

  document.getElementById(viewId).style.display = "block";
}
