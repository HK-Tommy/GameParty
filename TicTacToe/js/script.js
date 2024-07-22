const vsButtons = document.querySelector('.vs-button');
const twoPlayers = document.getElementById('twoPlayers');
const vsComputer = document.getElementById('vsComputer');
const twoPlayersSection = document.querySelector('.two-players');
const vsComputerSection = document.querySelector('.vs-computer');
const restartButton = document.getElementById('restartButton');
const gameDescription = document.getElementById("description");

function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const b_twoPlayers = urlParams.get('twoplayers');
  
    // 如果参数值在select选项中，则填充到select元素中
    if (b_twoPlayers === "true") {
        twoPlayersGame()
    }
    else if (b_twoPlayers === 'false')
    {
        vsComputerGame()
    }
}
GetParams();

function twoPlayersGame() {
    twoPlayersSection.style.display = "";
    vsComputerSection.remove();
    vsButtons.style.display = "none";
    restartButton.style.display = "";
    gameDescription.style.display = "none";
    document.getElementById("gameContainer").style.margin = "60px";
}
twoPlayers.addEventListener('click', twoPlayersGame);

function vsComputerGame() {
    vsComputerSection.style.display = "";
    twoPlayersSection.remove();
    vsButtons.style.display = "none";
    restartButton.style.display = "";
    gameDescription.style.display = "none";
    document.getElementById("gameContainer").style.margin = "60px";
}
vsComputer.addEventListener('click', vsComputerGame);


let currentPlayer = 'X';
let board = [['', '', ''], ['', '', ''], ['', '', '']];
let gameOver = false;

function twoPMakeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1}`).textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('twoPlayersWinnerText').textContent = `${currentPlayer} 勝利 !`;
            gameOver = true;
            gameComplete()
        } else if (checkTie()) {
            document.getElementById('twoPlayersWinnerText').textContent = "平局！";
            gameOver = true;
            gameComplete()
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        const player = document.getElementById("player").innerText === "玩家 1" ? "玩家 2" : "玩家 1";
        document.getElementById("player").innerText = player;
    }
}

function vsComMakeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1}`).textContent = currentPlayer;

        if (checkWin()) {
            document.getElementById('vsComputerWinnerText').textContent = `${currentPlayer} 勝利 !`;
            gameOver = true;
            gameComplete()
        } else if (checkTie()) {
            document.getElementById('vsComputerWinnerText').textContent = "平局！";
            gameOver = true;
            gameComplete()
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            if (!gameOver && currentPlayer === 'O') {
                setTimeout(makeComputerMove, 500); 
            }
        }
        const player = document.getElementById("player").innerText === "玩家" ? "人機" : "玩家";
        document.getElementById("player").innerText = player;
    }
}


function makeComputerMove() {
    if (!gameOver) {
        let row, col;
        do {
            row = Math.floor(Math.random() * 3);
            col = Math.floor(Math.random() * 3);
        } while (board[row][col] !== '');
        
        vsComMakeMove(row, col);
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (
            (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) ||
            (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer)
        ) {
            return true;
        }
    }
    
    if (
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
    ) {
        return true;
    }
    
    return false;
}

function checkTie() {
    for (let row of board) {
        if (row.includes('')) {
            return false;
        }
    }
    return true;
}

function gameComplete() {
    document.getElementById("gameBoard").style.display = "none";
    document.getElementById("player").style.display = "none";
    document.getElementById("player-description").style.display = "none";
    document.getElementById("gameContainer").style.margin = "150px"
}

function restartGame() {
    if (gameOver){
        location = 'index.html'
    }
    else{
        if (confirm("是否要退出當前遊戲 ?")){
            location = 'index.html'
        }
    }
}
restartButton.addEventListener('click', restartGame);