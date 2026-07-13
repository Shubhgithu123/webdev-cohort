const btnE1 = document.querySelector(".btn");
const inputE1 = document.querySelector(".input");
const copyIcon = document.querySelector(".fa-copy");
const alertconstainer = document.querySelector(".alert-container");


btnE1.addEventListener("click",()=>{
    createPassword();
})

copyIcon.addEventListener("click",()=>{
    if(inputE1.value){
         copypassword();
    }
    else{
       
        alertconstainer.classList.remove("active");
        alertconstainer.style.backgroundColor = "lightcoral"
        alertconstainer.innerText = "Please generate password First !"
        setTimeout(() => {
            alertconstainer.classList.add("active");
        }, 1500);
    }
})


function createPassword (){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 14;

    let password = ""

    for(let i = 0 ; i<passwordLength ; i++){
        const randomNum = Math.floor(Math.random()*chars.length);

        password += chars.substring(randomNum,randomNum+1);
        // password += chars.charAt(randomNum)


        // console.log(i,randomNum,password)
    }
    
    inputE1.value = password;

    alertconstainer.innerText = password + " Copied!"
}

function copypassword (){
    inputE1.select();

    inputE1.setSelectionRange(0,9999);

    //clipboard copying

    navigator.clipboard.writeText(inputE1.value);

    alertconstainer.classList.remove("active");

    setTimeout(()=>{
        alertconstainer.classList.add("active")
    },1500)
}