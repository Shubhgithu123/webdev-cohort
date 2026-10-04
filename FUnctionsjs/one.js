//revision to function variables memoryexecution 
//date 26 sept 2026
//source - weeb dev course chai code (platform)



//function 

function printChai() {
    console.log("welcome to chaicode , shubham");
}


function getBrush(a) {
    console.log(`get me brush : ${a}`);
}

const add = function addtwo(n1, n2) {
    return n1 + n2;
}



// getBrush(4);
// printChai();

//data type - number , boolean ,null, undefined

let rohit;

let skills = ["html", "css", "javascript", 67, true, false, rohit = "dskhgkh"];

// for (let i = 0; i < skills.length; i++) {
//     if (skills[i] === rohit) {
//         console.log(skills[i] + "   " + i);
//     }
// }

let studentProfile = {
    //key value pair

    name: "shubham",
    isPaid: true,
    age: 22,
    favouriteClass: null
}

// console.log(+undefined)

// -- unary plus operator
// The unary plus operator(+) is a unary operator that acts on a single operand, with its behavior varying significantly by programming language.

// In JavaScript, it serves as a fast and concise method for type coercion, attempting to convert its operand into a number.It handles strings, booleans, and null effectively(e.g., +"123" becomes 123, +true becomes 1), but returns NaN for invalid inputs like non - numeric strings. 


//-- binary plus operator

// The binary plus operator (+) is an arithmetic operator that acts on two operands to produce a result, primarily performing addition for numeric types.  In programming languages like C++ and JavaScript, it can also concatenate strings, merging two text values into a single string. 

// Key Characteristics
// Numeric Addition: Adds two numbers together (e.g., 5 + 3 results in 8).
// String Concatenation: If either operand is a string, the operator merges them (e.g., "a" + "b" results in "ab"). 
// Operator Overloading: In C++, developers can redefine the binary plus operator for custom classes to specify how objects of that class should be added together.
// Distinction from Unary Plus: Unlike the unary plus operator (which simply returns the value of a single operand or forces numeric conversion), the binary form requires exactly two operands.


//array
 
let fruits = ["apple", "cherry", "banana"];

// let intFruits = new Array("kiwi", "avacado", "dragon fruit");

// console.log(fruits);
// console.log(intFruits)

let myArray = ["1","2","3","4","5","6"];

function sumofArray (arr){
    let count = 0;
    for(let i = 0 ; i < arr.length ;i++){

        count = count + +arr[i];
    }
    // console.log(typeof arr.length)
    // console.log(count)
}


sumofArray(myArray) 


// for(let i = 0 ; i < length ; i++){
//     if(sumofArray[i] == "3"){
        
//     }
// }
// const index = myArray.indexOf("8")
// console.log(index)
// // const arr = myArray.splice(2,1,"new");
// // console.log(arr)

// const arr = myArray.slice(2,5)

// console.log(arr)

const teas = ["oolong tea", "green tea","chai","herbal tea"];

let count = 0;

for(let i = 0 ; i < teas.length ; i++){
    if(teas[i] !== "herbal tea"){
        count++;
    }
}

// console.log(count)

//use a for loop to create a new array with all tea names in uppercase

let upperteas = [];

for(let i = 0 ; i< teas.length ; i++){
    if(typeof(teas[i]) === "string"){
        let v = teas[i].toUpperCase();

        upperteas.push(v);
    }
}

// console.log(upperteas)

// Use a for loop to find thr tea name with most characters
let max = ""

for(let i = 0 ; i < teas.length ; i++){

    max = teas[i];
    // console.log(`${teas[i]} , length : ${teas[i].length}`)
    if(teas[i].length > max.length){
        max = teas[i];
    }

}
// let res = teas.slice(0,-1);
// console.log(res)




///objects 

//data is stored in key value pair  manor


const person = {
    x : 10,
    firstName : "shubham",
    lastName : "wangekar",
    hobbies : ["pubg","singing"],
    address: {
        hno:1,
        street : 1, 
        countryCode : "IN",
        state : "PB"
    },
    getFullName : function (name){
        return `${name} ragade`
    },
    hasgf : false,
    hadgf : false
}

console.log(person.x)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.hobbies.length)
console.log(person.address.countryCode,person.address.state)
console.log(person.getFullName("shubham"))




