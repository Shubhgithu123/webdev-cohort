const quizform = document.querySelector("#quizForm");

quizform.addEventListener("submit", function (e){
    e.preventDefault();
    let q1 = document.querySelector("#q1");
    console.log(q1.value)
})