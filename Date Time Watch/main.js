// this is for timinig script
let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let second = document.getElementById("second");
let period = document.getElementById("period");

setInterval(() => {
    let currentTime = new Date();
    // period = hour >= 12 ? "PM" : "AM";

    // period.innerHTML = `${period}`;
    
    if(hour>= 12){
        period="PM";
    }
    else{
        period="AM";
    }

    period.innerHTML=`${period}`;
    period.innerHTML=(currentTime);
    hour.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    second.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();


}, 1000)

// this is for day script
let daynum = document.getElementById("dayname");
let month = document.getElementById("month");
let year = document.getElementById("year");

const weekdays = ["Sunday",
    "Monday",
    "Tuesday",
    "Wdnesday",
    "Thrusday",
    "Friday",
    "Saturday"];

monthName = ["Jan",
    "Frb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"];

const today = new Date();
let date = today.getDate();

let day = weekdays[today.getDay()];
let mon = monthName[today.getMonth()];

daynum.innerHTML = `${day}`;
month.innerHTML = `${date} ${mon}`;

year.innerHTML = (today.getFullYear());
