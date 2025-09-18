document.getElementById("form").addEventListener('submit', 
function (e) {
    e.preventDefault();
     // stop default behaver of browser

    const gender = document.getElementById("person").value;
    const age = parseInt(document.getElementById("age").value);
    const heightfeet = parseInt(document.getElementById("height-feet").value);
    const heightinches = parseInt(document.getElementById("height-inches").value);
    const weight = parseInt(document.getElementById("weight").value);
    const resultele = document.getElementById("result");

    const heightInmeter = ((heightfeet * 12) + heightinches) * 0.0254;
     //0.0254=meter mean 1=inch
    const bmi = weight / (heightInmeter * heightInmeter);
    console.log('blah');
    let category = '';
    if (bmi < 18.5) {
        category = 'Under Weight';
    }
    else if (bmi > 19 && bmi < 24.9) {
        category = 'Normal Weight';
    }
    else if (bmi > 25 && bmi < 29.9) {
        category = 'Over Weight';
    }
    else {
        category = 'Obses'
    }

    let resultMessage = 'Your BMI: ' + bmi.toFixed(3) + '<br> Category:' + category;

    resultele.innerHTML = resultMessage;

    // if (gender && age && heightfeet && heightinches && weight) {

        

    // }
}

)   
