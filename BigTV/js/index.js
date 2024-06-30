/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

function redirect(){
  window.location.href = '../BigTV/game.html';
}

function gameplay() {
  document.getElementById("selection-screen").style.display = "none"
  document.getElementById("gameplay").style.display = "block"
}

function gameinfo() {
  document.getElementById("selection-screen").style.display = "none"
  document.getElementById("gameinfo").style.display = "block"
}

