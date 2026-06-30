const body = document.querySelector("body");


body.addEventListener("click", function (e){
    // console.log(e.clientX)
    // console.log(e.clientY)
    let red = Math.floor(Math.random()*360);
    let green = Math.floor(Math.random()*360);
    let  blue = Math.floor(Math.random()*360);
    // console.log(red)

    const circle = document.createElement("div");
    circle.classList.add("circle")
    // circle.textContent = "HI"
    circle.textContent = `${e.clientX}`
    circle.style.position = "absolute"
    circle.style.top = `${e.clientY -25}px`
    circle.style.left = `${e.clientX-25}px`
    circle.style.backgroundColor = `rgb(${red},${green},${blue})`


    body.append(circle)

    setTimeout(() => {
        circle.remove();
    }, 5000);
})