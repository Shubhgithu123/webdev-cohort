function greeting (){
    console.log("hello  coder army")
}

// console.log(greeting())
// greeting()

//sum function

function sum(a,d){
    return a+d;
}

// console.log(sum(10,20))

function check(num){
    return num % 2 == 0 ? "Even" : "Odd";
}

// console.log(check(7))

function largest(num1,num2){
    return num1>num2 ? num1 : num2;
}

// console.log(largest(1,1))

//reverse a string

// function reverse(str){
//     let res = "";

//     for(let i = str.length -1 ; i>-1;i--){
//             res+=str[i];
//     }
//     return res;
// }

// console.log(reverse("shubham"))

// count vowels 

function countVowels(str){
    str = str.toLowerCase();
    let count = 0;
    let vowels = ["a","e","i","o","u"];
    for(let i = 0 ; i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

// console.log(countVowels("javascript"));

// creation of function with function expression

// const addNumber = function (num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(1,2))

//
// arrow function
// if it is in sanme line then no need to write return
// console.log(greet(4)); not hoisted
let greet = num => num*num || 0;


// console.log(greet())

// let greet1 = num => {
//     let object = {
//         name:"shubham",
//         age:22
//     };
//     return object;
// }

// also written as

// let greet1 = ()=>{
//     return {
//         name:"shubham",
//         age:33
//     };
// }

// console.log(greet1())

// also it can be written as 
// let greet1 = () => ({name:"shubham",age:33})

// console.log(greet1())

// callback

// function greet2 (){
//     console.log("shubham aala re");
// }

// function meet(callback){
//     console.log("kon aalay re");
//     callback()
// }

// meet(greet2)


// This is your callback function. It's the "phone number" you'll leave behind.
// It describes what to do once the pizza is ready.
function pickUpPizza() {
  console.log("Pizza is ready! Driving to the store to pick it up.");
}


function orderPizza(callback) {
  
  
  console.log("Placing the pizza order...");

    // console.log("Pizza is cooked!");
  
    callback();

  
}

// --- Let's run the program ---
// We call orderPizza and give it our pickUpPizza function as the callback argument.
// orderPizza(pickUpPizza);

// This line will run immediately, while the pizza is still "cooking".
// console.log("I'm not waiting at the store. I'm at home, coding.");


//tsaks 

// function square(num){
//     return num*num;
// }

// const square = function (num){
//     return num*num;
// }

// console.log(square(4))

// const square = num => num*num

// console.log(square(4))


function greet3(name){
   console.log("Hello " + name)
}

function process(callback){

   let username = "Shubham";

   return callback(username)
}

let result = process(greet3)

// console.log("no return value",result)

// console.log(a);

// let a = 10;

const createBankAccount = () =>{
    let balance = 500;

    return {
        deposit(amount){
            if(typeof amount === "number" && amount>0){
                balance+=amount;
                console.log()
                return balance;
            }
        }
        ,
        withdraw(amount){
            if(typeof(amount) === "number" && amount>0 && balance>=amount){
                balance-=amount;
                return balance;
            }
        }
    }
}

let count = createBankAccount();

console.log(count)
console.log(count.deposit(100))

console.log(count.withdraw(400))
