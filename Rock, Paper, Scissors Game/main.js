const palyertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#result");
const choicebtn = document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;

console.log("run")

choicebtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    palyertext.textContent = `Player:${player}`;
    computertext.textContent = `Computer:${computer}`;
    resulttext.textContent = checkWinner();
}))

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw !";
    }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCk") ? "You Win!" : "You Lose!"
    }
}

