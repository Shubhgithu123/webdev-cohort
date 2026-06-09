// const remote = { 
//     color : "black",
//     brand : "xyz",
//     dimentions:{height:1,width:2},
//     turnoff : function (){
//         console.log("remote is turned off")
//         return `hello shubham:welcome to :  ${this.brand}`
//     },
//     volumeUp: function(){

//     }
// }

// let a = remote.turnoff()
// console.log(a)
// console.log(remote.dimentions)

// let p1 = {
//     fname :"hitesh"
// }

// let p2 = p1

// p2.fname = "shubham"

// console.log(p1.fname)

//deep copy any shallow copy

//shallow copy

const p1 = {
    fname : "hitesh",
    lname:"wangekar",
    address:{
        location: {
            mainRoad:"juna nagar road",
        }
    },
    calling : function (){
        console.log("calling shubham wangekar");
    }
}
//shallow copy why because it only copies the key or value which are on top order or upper level it doesnt copy nestedd object for nested objects it directly copies the address of nested object
// so any change by p2 in nested object will be replicated into p1 object
// const p2 = {
//     ...p1
// }

//here the values of p1 wont change because spread operator has copied the values from p1 object to p2 , which means p2 object key have new memory address but value or pair as same as p1
// p2.fname = "ashish"

// console.log(p1.fname)

// console.log(p2.fname)

// but what is happening with the nested object the address of nested  objects are being copied instaed of values so any change by p2 in nestead object will also be refleccted in p1 object

// p2.address.location.mainRoad = "chh sambhjinagar"
// console.log(p2.address.location.mainRoad )
// console.log(p1.address.location.mainRoad )

// therefore this is called shallow copy
const p4 = [1,2,3,[4,5,6],[[4,5],["gkjs"]]]

const p5 = [...p4]

// console.log(p5)

p5[3] = "shubham"

// console.log(p5)

// console.log(p4)
// deep copy

const data = JSON.stringify(p1);
// console.log(data)
const p2 = JSON.parse(data)

// console.log(p2)

p2.fname = "shubham"

// console.log(p2.fname)
// console.log(p1.fname)

// p2.address.location = "paithan madhe rahto"

// console.log(p2.address)
// console.log(p1.address)


//using structured clone method built in js 

const new1 = {
    fname : "shubham",
    lname :"wangekar",
    address : {
        location : "stuctured clone wala address"
    },
    getAddress (){
        console.log(this.address.location)
    }
}

// new1.getAddress()

// let new2 = structuredClone(new1)


// let new2 = {
//     ...structuredClone(new1),
//     getAddress : new1.getAddress
// }
// console.log(new2)


///simple to advance tasks on objects

//print object values 

let user = {
    name : "shubham",
    age:22,
    city:"Nagpur"
}

for(key in user){
    // console.log(user[key])
}

for(key in user){
    // console.log(`${key} : ${user[key]}`)
}

// console.log(Object.keys(user).length)
// console.log(Object.values(user).length)
// console.log(Object.entries(user).length)

// console.log(Object.hasOwn(user,"email")? "exists" : "not exists")

//Sum object values

let marks = {
    math : 80,
    science : 70,
    english : 90
}

let sum = 0;

for(let key in marks){
    sum += marks[key]
}
// console.log(sum)

//find highest value

let salaries = {
    ram : 20000,
    sham : 50000,
    hari : 35000
}

let max = salaries.ram

for(let key in salaries){
    if(salaries[key]>max){
        max = key
    }
}

// console.log(max)

//nested object access

let userloc ={
    name : "Shubham",
    address:{
        city : "Nagpur",
        state : "Maharashtra"
    }
}

// console.log(userloc.address.city)

//merge two objects

let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}

let obj3 = {...obj1,...obj2}

// console.log(obj3)

let obj4 = Object.values(user)



//charater frequency counter

let str1 = "banana";

let obj = {}

// let counter = 0;

for( let i = 0; i<str1.length ;i++){
    if(!obj[str1.charAt(i)]){
        obj[str1.charAt(i)] = 1;
    }
    else{
        obj[str1.charAt(i)]++;
    }
}

// console.log(obj)


//Dupplicate Finder

let arr = [1,2,3,2,4,1];

let eobj = {}

for(let i = 0 ; i<arr.length ; i++){
    if(!eobj[arr[i]]){
        eobj[arr[i]] = 1;
    }
    else{
        eobj[arr[i]] ++;
    }
}

// console.log(eobj)
let ans = []
for(let key in eobj){
    // eobj[key]>1 ? ans.push(Number(key)) : console.log("searched all object")
    if(eobj[key]>1){
        ans.push(Number(key))
    }
}

// console.log(ans)

// first Non repeating character

let str = "swiss"//"aabbcddeef";

let nobj = {};

for(let i = 0 ; i < str.length ; i++){
    if(!nobj[str.charAt(i)]){
        nobj[str.charAt(i)] = 1;
    }
    else{
        nobj[str.charAt(i)]++;
    }
}

// console.log(nobj)
for(let i = 0; i < str.length; i++){

    let char = str.charAt(i);

    if(nobj[char] === 1){
        // console.log(char);
        break;
    }
}


// Word frequency counter

let sentence = "I love JS and I love coding"

let words = sentence.split(" ")

// console.log(words)

let wobj = {}

for(let i = 0 ; i < words.length ; i++){
    // if(!wobj[words[i]]){
    //     wobj[words[i]] = 1;
    // }
    // else{
    //     wobj[words[i]]++;
    // }

    //optimized version 
    let word = words[i];

    wobj[word] = (wobj[word] || 0) + 1;
}

// console.log(wobj)


//reverse object 

// const obj5 = {
//     a:1,
//     b:2,
//     c:3
// }

// const obj6 = {};

// for(let key in obj5){
//     obj6[obj5[key]] = key;
// }

// console.log(obj6)

