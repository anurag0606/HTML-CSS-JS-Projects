function calculateTip() {
    // this is all id for input lable 
    const billAmount = document.getElementById("billAmount");
    const rating = document.getElementById("rating");
    const people = document.getElementById("people");
    const meal = document.getElementById("meal");

    //this all id for result 
    const tipAmount = document.getElementById("tipAmount");
    const amountTotal = document.getElementById("totalAmount");
    const amountPerson = document.getElementById("amountPerPerson");

    const billAm = parseFloat(billAmount.value);
    const rate = parseFloat(rating.value);
    const peop = parseInt(people.value);
    const meatType = meal;

    if (isNaN(billAm) || isNaN(rate) || isNaN(peop)) {
        tipAmount.textContent = "Please Enter Valid Number";
        amountTotal.textContent = "";
        amountPerson.textContent = "";
    }

    let tip;
    switch (rate) {
        case 1:
            tip = billAm * 0.05;
            break;
        case 2:
            tip = billAm * 0.10;
            break;
        case 3:
            tip = billAm * 0.15;
            break;
        case 4:
            tip = billAm * 0.20;
            break;
    }

    tipAmount.textContent = `Tip: ₹ ${tip}`;
    let totalAmount = billAm + tip;
    let amountPerPerson = totalAmount / peop;

    amountTotal.textContent = `Total Amount: ₹ ${totalAmount}`;

    amountPerson.textContent = `Amount Per Person: ₹ ${amountPerPerson.toFixed(2)}`;
}

document.getElementById("calculate").addEventListener('click', calculateTip);