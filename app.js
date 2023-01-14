let idNumber = document.querySelector(".advice__id-number"); 
let advice = document.querySelector(".advice__quote"); 
let diceBtn = document.querySelector(".advice__dice"); 

window.addEventListener("load", function() {
    let initialData = fetch("https://api.adviceslip.com/advice/117")
    .then(res => res.json())
    .then(data => {
        const adviceObj = data.slip; 
        idNumber.textContent = `ADVICE #${adviceObj.id}`; 
        advice.textContent = `"${adviceObj.advice}"`; 
    })
});

diceBtn.addEventListener("click", function() {
    let initialData = fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        const adviceObj = data.slip; 
        idNumber.textContent = `ADVICE #${adviceObj.id}`; 
        advice.textContent = `"${adviceObj.advice}"`; 
    })
})



