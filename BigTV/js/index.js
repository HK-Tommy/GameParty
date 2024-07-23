/* If the user clicks anywhere outside the select box,
then close all select boxes: */
//document.addEventListener("click", closeAllSelect);

function GetParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const gamePlayParam = urlParams.get('gameplay');
  const gameInfoParam = urlParams.get('gameinfo');
  platform = urlParams.get('platform')
  b_app = urlParams.get('app');

  if (gamePlayParam == 1) {
    gameplay()
  }
  else if (gameInfoParam == 1){
    gameinfo()
  }
}

GetParams()

function redirect(){
  if (b_app === 'true') {
    window.location.href = '../BigTV/game.html?&app=' + b_app + '&platform=' + platform;
  }
  else{
    window.location.href = '../BigTV/game.html';
  }
}

function gameplay() {
  document.getElementById("selection-screen").style.display = "none"
  document.getElementById("gameplay").style.display = "block"

  var urlParams = new URLSearchParams(window.location.search);
  urlParams.set('gameplay', 1);
}

function gameinfo() {
  document.getElementById("selection-screen").style.display = "none"
  document.getElementById("gameinfo").style.display = "block"

  var urlParams = new URLSearchParams(window.location.search);
  urlParams.set('gameinfo', 1);
}

function quitGame()
{
  if (b_app === 'true')
  {
    location = '../index.html?app=' + b_app + '&platform=' + platform
  }
  else{
    location = '../index.html'
  }
}

function reload() {
  location.reload()
}