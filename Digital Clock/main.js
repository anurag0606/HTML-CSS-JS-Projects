// qureySelector == document.qureySelector(css Selector)
//above selecter only select first css selector
// qureySelector == document.qureySelector(css Selector)
//above selecter  select all css selector

let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let second = document.getElementById("second");
let period = document.getElementById("period");


// period = hour => 12 ? "PM" : "AM";
// hour = hour == 0 ? 12 : hour > 12 ? hour = 12 : hour;
setInterval(() => {
    let currentTime = new Date();


    // period.innerHTML = `${period}`;
    hour.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    second.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();


}, 1000)


