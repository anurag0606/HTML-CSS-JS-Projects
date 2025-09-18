function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateParts = birthdateInput.split("-");
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1]-1;
    const birthYear = birthdateParts[2];

    // console.log(today)
    // console.log(birthdateInput);
    // console.log(birthDay);
    // console.log(birthMonth);
    // console.log(birthYear);

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    // let y = today.getFullYear()
    // let m = today.getMonth() + 1    
    // let d = today.getDate()

    // let y2 = y - birthYear
    // let m2 = m - birthMonth
    // let d2 = d - birthDay
    // console.log(y, m, d)
    // console.log(y2, m2, d2)

    const ageMillisecond = today - birthDate;
    const ageSecond = Math.floor(ageMillisecond / 1000);
    const ageMinutes = Math.floor(ageSecond / 60);
    const ageHour = Math.floor(ageMinutes / 60);
    const ageDays = Math.floor(ageHour / 24);
    const ageWeeks = Math.floor(ageDays / 7);
    const ageMonth = Math.floor(ageDays / 30.436875);
    const ageYear = Math.floor(ageDays / 365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="resultitem">
    <h3>Age:</h3>
    <p>${ageYear} Year ${ageMonth % 12} Month ${ageDays % 30} Days</p>
    </div>
    <div class="resultitem">
        <h3>Month Passed :</h3>
        <p>${ageMonth}</p>    
    </div>
    <div class="resultitem">
        <h3>Weeks Passed :</h3>
        <p>${ageWeeks}</p>    
    </div>
    <div class="resultitem">
        <h3>Days Passed :</h3>
        <p>${ageDays}</p>    
    </div>
    <div class="resultitem">
        <h3>Hours Passed :</h3>
        <p>${ageHour}</p>    
    </div>
    <div class="resultitem">
        <h3>Minutes Passed :</h3>
        <p>${ageMinutes}</p>    
    </div>
    <div class="resultitem">
        <h3>Seconds Passed :</h3>
        <p>${ageSecond}</p>    
    </div>
    `;
}
const ageCalculater = document.getElementById("ageCalculate");
ageCalculater.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAge();
});