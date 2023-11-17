document.addEventListener("DOMContentLoaded", function () {
    // Initialisiere die Default-Seite
    loadPage("index");
  
    // Füge den Click-Event-Listener zu den Navigation-Links hinzu
    const buttonList = document.querySelector(".Button");
    buttonList.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        event.preventDefault();
        const targetPage = event.target.getAttribute("href").substring(1); // Entferne das "#" Symbol
        loadPage(targetPage);
      }
    });
  });
  
  function loadPage(page) {
    fetch(`${page}.html`)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("content").innerHTML = html;
        document.getElementById("pageTitle").innerText = page; // Setze den Seitentitel dynamisch
      })
      .catch((error) => console.error("Error loading page:", error));
  }