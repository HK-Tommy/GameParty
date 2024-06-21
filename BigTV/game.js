let selectedTopic;
let gameTime;
let timerInterval;
let questionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let skipAnswers = 0;
let clicks = 0;

let topics;
function GetTopics() {
  fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    // topics
    topics = data;
    //console.log(topics);
  })
  .catch(error => console.error('Error fetching local data:', error));
}

function selectTopic() {

    selectedTopic = document.getElementById("game-theme").value;
    if (document.getElementById('game-time').selectedIndex != 0)
      {
        if (document.getElementById('game-theme').selectedIndex != 0)
          {
            GetTopics()
            startGame()
          }
          else {
            alert("請選擇遊戲主題 ! ");
          }
      }
    else {
        alert("請選擇遊戲時間 ! ");
    }
}

function startGame() {
  if ((document.getElementById('game-time').value) === "unlimited") {
    document.getElementById('timer').style.display = 'none';
  }
    gameTime = parseInt(document.getElementById('game-time').value);
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('pre-game-screen').style.display = 'block';

    document.getElementById('pre-game-screen').addEventListener('click', () => {
        document.getElementById('pre-game-screen').style.display = 'none';
        startCountdown();
    }, { once: true });
}

function startCountdown() {
    const countdownElem = document.getElementById('countdown');
    countdownElem.innerText = '3';
    document.getElementById('countdown-screen').style.display = 'block';

    let count = 3;
    const countdownInterval = setInterval(() => {
        count--;
        if (count === 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-screen').style.display = 'none';
            startGamePlay();
        } else {
            countdownElem.innerText = count;
        }
    }, 1000);
}

function startGamePlay() {
    questionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    skipAnswers = 0;
    clicks = 0;
    document.getElementById('game-screen').style.display = 'block';
      if(gameTime != "unlimited") {
        timerInterval = setInterval(() => {
          gameTime--;
  
          if (gameTime <= 0) {
              clearInterval(timerInterval);
              endGame();
          }
  
          document.getElementById('timer').innerText = `剩餘時間: ${gameTime}秒`;
        }, 1000);
      }
    loadQuestion();
}

function loadQuestion() {
    const questions = topics[selectedTopic];
    const question = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerText = question;
    const questionIndex = questions.indexOf(question);

    if (questionIndex !== -1) {
        // 移除該問題
        questions.splice(questionIndex, 1);
    }
    else {
      alert("沒有題目可用 ! ")
      endGame()
    }
}

function handleAnswer(isCorrect) {
    clicks++;
    if (isCorrect) {
        correctAnswers++;
    }
    else {
      wrongAnswers++;
    }
    loadQuestion();
}

function skipQuestion() {
    clicks++;
    skipAnswers++;
    loadQuestion();
}

function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('result_correct').innerText = `答對: ${correctAnswers}`;
    document.getElementById('result_wrong').innerText = `答錯: ${wrongAnswers}`;
    document.getElementById('result_skip').innerText = `跳過: ${skipAnswers}`;
}

function resetGame() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'block';
    clearInterval(timerInterval);
}


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);