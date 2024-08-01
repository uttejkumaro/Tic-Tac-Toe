var flag = 1;

function myfunc() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    var b1btn = document.getElementById("b1");
    var b2btn = document.getElementById("b2");
    var b3btn = document.getElementById("b3");
    var b4btn = document.getElementById("b4");
    var b5btn = document.getElementById("b5");
    var b6btn = document.getElementById("b6");
    var b7btn = document.getElementById("b7");
    var b8btn = document.getElementById("b8");
    var b9btn = document.getElementById("b9");

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b4btn, b5btn, b6btn, b7btn, b8btn, b9btn]);
        highlightWinningButtons([b1btn, b2btn, b3btn]);
    } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b2btn, b3btn, b5btn, b6btn, b8btn, b9btn]);
        highlightWinningButtons([b1btn, b4btn, b7btn]);
    } else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b1btn, b2btn, b3btn, b4btn, b5btn, b6btn]);
        highlightWinningButtons([b7btn, b8btn, b9btn]);
    } else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b1btn, b2btn, b4btn, b5btn, b7btn, b8btn]);
        highlightWinningButtons([b3btn, b6btn, b9btn]);
    } else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b2btn, b3btn, b4btn, b6btn, b7btn, b8btn]);
        highlightWinningButtons([b1btn, b5btn, b9btn]);
    } else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b1btn, b2btn, b4btn, b6btn, b8btn, b9btn]);
        highlightWinningButtons([b3btn, b5btn, b7btn]);
    } else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b1btn, b3btn, b4btn, b6btn, b7btn, b9btn]);
        highlightWinningButtons([b2btn, b5btn, b8btn]);
    } else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableButtons([b1btn, b2btn, b3btn, b7btn, b8btn, b9btn]);
        highlightWinningButtons([b4btn, b5btn, b6btn]);
    } else if ((b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b4btn, b5btn, b6btn, b7btn, b8btn, b9btn]);
        highlightWinningButtons([b1btn, b2btn, b3btn]);
    } else if ((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b2btn, b3btn, b5btn, b6btn, b8btn, b9btn]);
        highlightWinningButtons([b1btn, b4btn, b7btn]);
    } else if ((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b2btn, b3btn, b4btn, b5btn, b6btn]);
        highlightWinningButtons([b7btn, b8btn, b9btn]);
    } else if ((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b2btn, b4btn, b5btn, b7btn, b8btn]);
        highlightWinningButtons([b3btn, b6btn, b9btn]);
    } else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b2btn, b3btn, b4btn, b6btn, b7btn, b8btn]);
        highlightWinningButtons([b1btn, b5btn, b9btn]);
    } else if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b2btn, b4btn, b6btn, b8btn, b9btn]);
        highlightWinningButtons([b3btn, b5btn, b7btn]);
    } else if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b3btn, b4btn, b6btn, b7btn, b9btn]);
        highlightWinningButtons([b2btn, b5btn, b8btn]);
    } else if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b2btn, b3btn, b7btn, b8btn, b9btn]);
        highlightWinningButtons([b4btn, b5btn, b6btn]);
    } else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b2btn, b3btn, b4btn, b6btn, b7btn, b8btn]);
        highlightWinningButtons([b1btn, b5btn, b9btn]);
    } else if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b2btn, b4btn, b6btn, b8btn, b9btn]);
        highlightWinningButtons([b3btn, b5btn, b7btn]);
    } else if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b3btn, b4btn, b6btn, b7btn, b9btn]);
        highlightWinningButtons([b2btn, b5btn, b8btn]);
    } else if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableButtons([b1btn, b2btn, b3btn, b7btn, b8btn, b9btn]);
        highlightWinningButtons([b4btn, b5btn, b6btn]);
    } else if (b1 != "" && b2 != "" && b3 != "" && b4 != "" && b5 != "" && b6 != "" && b7 != "" && b8 != "" && b9 != "") {
        document.getElementById('print').innerHTML = "Match Tie";
    } else {
        document.getElementById('print').innerHTML = flag == 1 ? "Player X Turn" : "Player 0 Turn";
    }
}

function disableButtons(buttons) {
    buttons.forEach(button => button.disabled = true);
}

function highlightWinningButtons(buttons) {
    buttons.forEach(button => button.style.color = "red");
}

function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    } else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
    myfunc();
}

function myfunc_2() {
    location.reload();
}
