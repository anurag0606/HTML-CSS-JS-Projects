
document.getElementById("submitbutton").onclick = function () {
    let temp;
    let celsius = document.getElementById("cbutton");
    let fahereneit = document.getElementById("fbutton");

    if (celsius.checked) {
        temp = document.getElementById("textarea").value;
        temp = Number(temp);
        temp = toCelsius(temp)
        document.getElementById("templable").innerHTML = temp + "°C";
        // (temp -32) * (5/9);
    }
    else if (fahereneit.checked) {
        temp = document.getElementById("textarea").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("templable").innerHTML = temp + "°F";
        // temp*9/5 +32;
    }
    else {
        document.getElementById("templable").innerHTML = "Select a unit";
    }
}
function toCelsius(temp){
    return (temp -32) * (5/9);
}
function toFahrenheit(temp){
    return temp*9/5 +32;
}