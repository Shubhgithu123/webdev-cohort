const form = document.querySelector("#form");
const Boy = document.getElementById("Boy");
const Girl = document.getElementById("Girl");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const l1 = Boy.value.length;

    const l2 = Girl.value.length;

    const res = Math.pow(l1+l2,3)%101 ; 

    result.textContent = `Result = ${res}`
    
})
