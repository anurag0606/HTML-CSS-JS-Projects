//this is an input type id veriable
const redSlide = document.getElementById("redSlide");
const greenSlide = document.getElementById("greenSlide");
const blueSlide = document.getElementById("blueSlide");

//this is a Span Value  veriable
const redValueSpam = document.getElementById("redValueSpam");
const greenValueSpam = document.getElementById("greenValueSpam");
const blueValueSpam = document.getElementById("blueValueSpam");

// this is a color display box ,button , rgb  value Variabe
const colorBox = document.getElementById("color-box");
const copyBtn = document.getElementById("copyBtn");
const rgbValue = document.getElementById("dummyValue");


redSlide.addEventListener('input', updateColor);
greenSlide.addEventListener('input', updateColor);
blueSlide.addEventListener('input', updateColor);

function updateColor() {
    const redValue = redSlide.value;
    const greenValue = greenSlide.value;
    const blueValue = blueSlide.value;
    //console.log(redValue,greenValue,blueValue);


    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
    //console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;
 

    redValueSpam.textContent = redValue;
    greenValueSpam.textContent = greenValue;
    blueValueSpam.textContent = blueValue;



    rgbValue.textContent = rgbColor;
    

}
updateColor();

copyBtn.addEventListener('click', copyRGBValue);


function copyRGBValue() {
    const redValue = redSlide.value;
    const greenValue = greenSlide.value;
    const blueValue = blueSlide.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(() => {
            alert("RGB COlor Value copied to Clipboard: +rgbColor");
            //then() resolve state working with promise
        })
        .catch((error) => {
            console.log("Failed to copy RGB Value", error);
            // catch() rejected state working with promise

        });

}

