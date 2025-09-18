// number guessing game 
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("btn").onclick = function () {
    let guess = document.getElementById("guessfield").value;
    guesses += 1;

    if (guess == answer) {
        alert(`${answer} is the number. it took you${guesses} guesses`);
    }
    else if (guess < answer) {
        alert(`to small`);
    }
    else {
        alert(`too large`);
    }
}

