/* If the user clicks anywhere outside the select box,
then close all select boxes: */
//document.addEventListener("click", closeAllSelect);

function redirect(){
  window.location.href = '../BigTV/game.html';
}

function gameplay() {
  document.getElementById("selection-screen").style.display = "none"
  document.getElementById("gameplay").style.display = "block"

  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("gameplay", 1);
}

function gameinfo() {
  document.getElementById("selection-screen").style.display = "none"
  document.getElementById("gameinfo").style.display = "block"

  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("gameinfo", 1)
}

function GetParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const gamePlayParam = urlParams.get('gameplay');
  const gameInfoParam = urlParams.get('gameinfo');

  if (gamePlayParam == 1) {
    gameplay()
  }
  else if (gameInfoParam == 1){
    gameinfo()
  }
}

GetParams()
