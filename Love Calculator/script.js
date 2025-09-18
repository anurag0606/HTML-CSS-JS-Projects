function calculate() {

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();


    if (name1=== "" || name2=== "" )
    {
        alert("Please enter name");
    }
    else 
    {
        const lovePercentage = Math.floor(Math.random() * 101);
        //math.floor eg=(2.56) =2 ,,  math.random mean any ramndam value given in 0 to 1 range 

        const result = document.getElementById("result");

        result.innerHTML=`${name1} and ${name2} 's Love Percentage: ${lovePercentage}`


        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a grest Match. Keeping Looking !"
        }
        else if (lovePercentage > 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There is a potential . Give it try !"
        }
        else {
            result.innerHTML += "<br> Great Match! Love is in Air !"
        }

    }
}