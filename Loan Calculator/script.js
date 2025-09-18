document.querySelector("#calculatebtn").addEventListener('click', calculation);

function calculation() {
    const loanAmount = parseFloat(document.getElementById("amount").value); //pareFloat mean user give float value ter are accepted 
    const intrestRate = parseFloat(document.getElementById("rate").value); //  and int also accepted 
    const loanTerm = parseFloat(document.getElementById("term").value);

    // if (NaN(loanAmount) || NaN(intrestRate) || NaN(loanTerm)) {
    //     alert("Please Enter valid Number for all the Field")
    //     // NaN mean not a number

    // }

    const monthlyIntrest = intrestRate / 12 / 100;
    // suppose intrestRate=7% , formula=  7/12=0.583 them 0.583/100=0.005

    const loanTermMonth = loanTerm;
    // how many month are given to pay loan

    const monthlyEMI= (loanAmount * monthlyIntrest * Math.pow((1 + monthlyIntrest),loanTermMonth)) /(Math.pow((1 + monthlyIntrest),loanTermMonth) - 1);
    // formula for monthlyPayment=loanAmount*intrestRate*(( 1 +intrestrate) ^ duration in loanTermMonth / ( 1 + intrestrate) ^ duration in loanTermMonth-1 )
    //  emi=p*r*((1+r)^n/(1+r)^n-1)
    // here, p=principle, r= rate, n=duration

    const totalIntrest = (monthlyEMI * loanTermMonth) - loanAmount;
    //(emi*n)-p]

    const totalAmountPayble= (loanAmount+totalIntrest);

    displayResult(monthlyEMI, totalIntrest, loanAmount,totalAmountPayble);

}

function displayResult(monthlyPayment, totalIntrest,loanAmount,totalAmountPayble) {
    const result = document.getElementById('result');

    result.innerHTML = ` <div>Monthly EMI: ${monthlyPayment.toFixed(2)} </div>
     <div> Total Intrest: ${totalIntrest.toFixed(2)}</div> 
     <div>Loan Amount: ${loanAmount} </div>
     <div>Total Amount Payble: ${totalAmountPayble.toFixed(2)}</div> `;

}

