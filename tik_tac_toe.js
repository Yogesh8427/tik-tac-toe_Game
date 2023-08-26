// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");
// let box6 = document.getElementById("box6");
// let box7 = document.getElementById("box7");
// let box8 = document.getElementById("box8");
// let box9 = document.getElementById("box9");
let start = document.getElementById("startbut");
let restart = document.getElementById("restart");
let box = Array.from(document.querySelectorAll(".con"));
let player = document.getElementById("player");
let boxhid;
for (i = 0; i < box.length; i++) {
    boxhid = box[i].children[0].style.visibility = 'hidden';
    box[i].children[0].innerHTML = ".";
}
start.addEventListener('click', () => {
    for (i = 0; i < box.length; i++) {
        boxhid = box[i].children[0].style.visibility = 'visible';
        player.innerText = "Player 1 \'O\' turn";
    }
    start.style.display = "none";
})
restart.addEventListener('click', () => {
    for (i = 0; i < box.length; i++) {
        box[i].children[0].innerText = ".";
        box[i].children[0].style.color = "black";
        box[i].children[0].style.visibility = 'visible';
        player.innerText = "Player 1 \'O\' turn";
        playerarr = [];
    }
})

//enter value in box by player clicking
let count = 1;
for (i = 0; i < box.length; i++) {
    let a = [i];
    function addelement() {
        if (boxhid != 'hidden') {
            if (count % 2 == 0) {
                if (box[a].children[0].innerText == '.') {
                    box[a].children[0].innerText = "X";
                    player.innerText = "Player 1 \'O\' turn";
                    let obj = { X: a[0] };
                    check(obj, 2);
                    count++;
                }
            }
            else {
                if (box[a].children[0].innerText == '.') {
                    box[a].children[0].innerText = "O";
                    player.innerText = "Player 2 \'X\' turn";
                    let obj = { O: a[0] };
                    check(obj, 1);
                    count++;
                }
            }
        }
        else {
            alert("start game first")
        }
    }
    box[i].addEventListener("click", addelement)
}

//win loose logic
let playerarr = [];
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],]
function check(ele, a) {
    playerarr.push(ele);
    // console.log(playerarr);
    let wins;
    let n = 0;
    // if (box1.innerText === box2.innerText && box2.innerText === box3.innerText && box1.innerText != '.' ||
    //     box4.innerText === box5.innerText && box5.innerText === box6.innerText && box4.innerText != '.' ||
    //     box7.innerText === box8.innerText && box8.innerText === box9.innerText && box7.innerText != '.' ||
    //     box1.innerText === box4.innerText && box4.innerText === box7.innerText && box1.innerText != '.' ||
    //     box2.innerText === box5.innerText && box5.innerText === box6.innerText && box2.innerText != '.' ||
    //     box3.innerText === box6.innerText && box6.innerText === box9.innerText && box3.innerText != '.' ||
    //     box1.innerText === box5.innerText && box5.innerText === box9.innerText && box1.innerText != '.' ||
    //     box3.innerText === box5.innerText && box5.innerText === box7.innerText && box3.innerText != '.') {
    for (l = 0; l < win.length; l++) {
        if (box[win[l][n]].children[0].innerText == box[win[l][n + 1]].children[0].innerText &&
            box[win[l][n + 1]].children[0].innerText == box[win[l][n + 2]].children[0].innerText&&
            box[win[l][n + 1]].children[0].innerText!='.') {
            if (a == 1) {
                player.innerText = "Player 1 \'O\' Win's";
                wins = 'win';
                for (i = 0; i < box.length; i++) {
                    if (box[i].children[0].innerText == '.') {
                        box[i].children[0].style.visibility = 'hidden';
                    }
                }
                for (j = 0; j < win.length; j++) {
                    let k = 0;
                    if (box[win[j][k]].children[0].innerText == 'O' &&
                        box[win[j][k + 1]].children[0].innerText == 'O' &&
                        box[win[j][k + 2]].children[0].innerText == 'O') {
                        box[win[j][k]].children[0].style.color = 'green';
                        box[win[j][k + 1]].children[0].style.color = 'green';
                        box[win[j][k + 2]].children[0].style.color = 'green';
                    }
                }
            }
            else {
                player.innerText = "Player 2 \'X\' Win's";
                wins = 'win';
                for (i = 0; i < box.length; i++) {
                    if (box[i].children[0].innerText == '.') {
                        box[i].children[0].style.visibility = 'hidden';
                    }
                }
                for (j = 0; j < win.length; j++) {
                    let k = 0;
                    if (box[win[j][k]].children[0].innerText == 'X' &&
                        box[win[j][k + 1]].children[0].innerText == 'X' &&
                        box[win[j][k + 2]].children[0].innerText == 'X') {
                        box[win[j][k]].children[0].style.color = 'green';
                        box[win[j][k + 1]].children[0].style.color = 'green';
                        box[win[j][k + 2]].children[0].style.color = 'green';
                    }
                }
            }
            console.log("win");
        }
        if (playerarr.length == 9 && wins != 'win') {
            player.innerText = "Match Draw";
        }
    }
}
