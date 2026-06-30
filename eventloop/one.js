const body = document.querySelector("body")
console.log("hello ji");

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click",function (){
    body.style.backgroundColor = "red"
    console.log("btn1")
})

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click",function (){
    body.style.backgroundColor = "green"
    console.log("btn2")

})

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click",function (){
    body.style.backgroundColor = "blue"
    console.log("btn3")

})

console.log("shubham wangekar")