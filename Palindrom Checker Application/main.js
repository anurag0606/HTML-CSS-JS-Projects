function reverse(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

function palindromCheck() {
    let word = document.getElementById("words").value;
    let res = document.getElementById("result");
    if (word == "") {
        alert("Please Enter any String !");
    }
    else {
        word = word.toLowerCase();

        if (word === reverse(word)) {
            res.innerHTML = "It's a Palindrome !";
        } else {
            res.innerHTML = "It's not a Palindrome"
        }
    }
}

