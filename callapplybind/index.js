// "use strict"



// // function greet(){
// //     console.log(`hi ${this.name}`);
// // }



// // const user = {
// //     name: "shubham",
// //     age:23,
// // }

// // const user1 = {
// //     name:"suraj"
// // }

// // user.greet = greet

// // user.greet()


// // user1.greet = greet
// // user1.greet()

// // user1.greet()
// // user.greet()







// // this under function 

// //normal function : none strict mode , this will point to global object
// // in strict mode it will point to undefines


// //call method 

// // greet.call(user)
// // greet.call(user1)





// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// //this = {} this will point to empty object

// const p1 = new Person ("shubham", 23);
// const p2 = new Person ("shubham", 23);


// // console.log(p1)
// // console.log(p2)

// // //Arrow   = this doesnt exist for arrow function , lexical environment scope se this ko leta hai

// // const one = ()=>{
// //     console.log(this)
// // }
// // one()

// console.log(window)// window is not defined
// window object is created by browser so thats why node environment doesnot have window object as a result it gives reference error

// global object in node js is global
// console.log(global)
//as this global object doesnt exists in brower will cause error
// global object  in browser is called window and in node js it is called global

// console.log(globalThis)

//globalthis = will point to global object of the environment (universal)

//learn about this keyword

// console.log(this) //-> will point in node js env to empty object{} and in browser to window object 

// this.document.querySelector("body").style.color = "red"

// "use strict"

// console.log(this)

//function

// const user = {
//     name:"shubham",
//     age:23,
//     greet:function(){
//         // console.log(this)
//         console.log(`hi ${this.name}`)
//     }
// }

//  function greet(){
//         // console.log(this)
//         console.log(`hi ${this.name}`)
//     }

// const user = {
//     name:"shubham",
//     age:23,
   
// }

// //this == user

// user.greet();

// const user2 = {
//     name :"Ashish"
// }


// user2.greet = user.greet
// // this == user2
// user2.greet()

 

// "use strict"

// function greet(){
//         console.log(this)
//         console.log(`hi ${this.name}`)
//     }

// function increamentAge(value,name){
//     this.age = value;
//     this.name = name;

//     console.log(`Name : ${this.name} , Age : ${this.age}`)
// }

// const user = {
//     name:"shubham",
//     age:23,
   
// }

// const user2 = {
//     name : "rohit"
// }

// //source of bug be created
// // greet()//non strict mode - >will point to global object  in stict mode - > as we can see no one is invoking it so it will return undefined

// //call()

// let res = greet.call(user)
// console.log(res) //-> undefined
// this == user
//.call return nothing

// greet.call(user2)
// increamentAge.call(user,32,"om")
// class Caller {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//   greet1() {
//         console.log(this.name)
//     }
// }

// const user3 = new Caller("amol",30)
// console.log(user3)
// user3.greet1()

// delete user3.age

// console.log(user3)

// const user4 = new Caller("shreyash",30)

// console.log(user4)

// user4.greet1()


//arrow function

// "use strict"
// arrow funtion do not have its own this
// this is borrowed from its lexical scope
// const greet = ()=>{
//     console.log(this)
//     // console.log(globalThis)
//     // console.log(global)
// }

// greet()

// console.log(this)
    // console.log(globalThis)

// function meet(){
//     console.log(this)
// }

// meet()

//this keyword in global scope : NodeJS (empty object)  , in browser it will point to global object
//arrow function take this keyword from its lexical scope
// "use strict"
// const user = {
//     name:"Shubham",
//     greet: function(){
//         function meet(){
//             console.log(this)
//         }
//         // const meet = () =>{
//         //     console.log(this)
//         // }
//         meet();
//     }
// }

// user.greet()

const stopwatch = {
    second : 0,
    start : function (){
        console.log(this)
        // setInterval(function(){
        //      console.log(this.second++)
        // },1000)
        // setInterval(()=>{
        //    if(this.second!=10){
        //      console.log(this.second++)
        //    }
        //    return
        // },1000)
    }
}
// stopwatch.start();

// const user = {
//     name:"shubham",
//     greet: ()=>{
//         console.log(this);
//     }
// }

// user.greet()

function shubham(){
    console.log(this);
}

shubham()