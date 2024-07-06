let randomNumber = 0;
let onSelect;

function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const numberParam = urlParams.get('number');
  
    // 获取select元素
    const numberSelect = document.getElementById('number_select');
  
    // 如果参数值在select选项中，则填充到select元素中
    if (numberParam && Array.from(numberSelect.options).some(option => option.value === numberParam)) {
        numberSelect.value = numberParam;
    }
}
  
GetParams();

function selection_change() {
    max = document.getElementById("number_select").value;
    if (max == 0)
        {
           resetGame()
        }
    else
        {
            randomNumber = Math.floor(Math.random() * max);
            document.getElementById("status").innerText = "數字已刷新 ! ";
            onSelect = true
            document.getElementById("control").style.display = "block";
            document.getElementById("backButton").style.display = "none";
        }
}

function confirm() {
    input_value = document.getElementById("input").value;
    if (randomNumber != 0 && input_value != "") {
        if (input_value > randomNumber) {
            document.getElementById("status").innerText = `數字少於 ${input_value}`;
        }
        else if (input_value < randomNumber)
        {
            document.getElementById("status").innerText = `數字大於 ${input_value}`;
        } 
        else
        {
            alert("答對了 ! ")
            resetGame()
        }
    }
}

function input_onFocus() {
    if (onSelect) {
        document.getElementById("status").innerText = ``;
        onSelect = false
    }
}

function resetGame(){
    randomNumber = 0
    document.getElementById("number_select").value = 0
    document.getElementById("input").value = ""
    document.getElementById("control").style.display = "none";
    document.getElementById("status").innerText = ``;
    document.getElementById("backButton").style.display = "block";
}