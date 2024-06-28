let randomNumber = 0;

function selection_change() {
    max = document.getElementById("number_select").value;
    if (max == 0)
        {
            document.getElementById("status").innerText = "數字未刷新 ! ";
        }
    else
        {
            randomNumber = Math.floor(Math.random() * max);
            document.getElementById("status").innerText = "數字已刷新 ! ";
        }
}

function confirm() {
    input_value = document.getElementById("input").value;
    if (randomNumber != 0 && input_value != "") {
        
        if (input_value > max) {
            document.getElementById("status").innerText = `數字已超出範圍之內`;
        }
        else
        {
            if (input_value > randomNumber) {
                document.getElementById("status").innerText = `數字少於 ${input_value}`;
            }
            else if (input_value < randomNumber)
            {
                document.getElementById("status").innerText = `數字大於 ${input_value}`;
            } 
            else
            {
                document.getElementById("status").innerText = `答對了 !`; 
                randomNumber = 0
            }
        }
        
    }
}

function input_onFocus() {
    document.getElementById("status").innerText = ``;
    console.log("d")
}