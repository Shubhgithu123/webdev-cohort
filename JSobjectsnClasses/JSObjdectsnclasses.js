// console.log("shubham")

// const p1 = {
//     fname:"shubham",
//     lname:"wangekar",
//     getFullName : function (){
//         console.log(`${this.fname}  ${this.lname}`)
//     }
// }

// const p2 = {
//     fname : "aditya",
//     lname : "malve",
//     getFullName : function (){
//         console.log(`${this.fname} ${this.lname}`)
//     }
// }

// p1.getFullName();
// p2.getFullName();

//DRY = Do not repeat yourself

// what happend is we have created 2 new object with same properties so you may think we could use deep copy or shallow copy method but here the case is different 
//we dont want to  copy values here we want to create objects of same structures but we have created two objects by hardcoding similar stuctures for them 
//to avoid DRY we can use class or create a parent class in which will define properties , then will use parent class to create objects using new key word

// new keyword just allocates the memory to newly created objects
// we cannot create an object without constructor function
//constuctor always accepts parameters 
// there are two type of constuctors parameterized constuctor and default constuctor
// class Parent {
//     constructor (fname, lname){
//         // this refferes to the object on which it is called
//         this.fname = fname;
//         this.lname = lname;
//     }

//     getfullName (){
//         return `${this.fname} ${this.lname}`;
//     }
// }

// const p1 = new Parent("shubham","wangekar");

// // console.log(typeof p1)

// console.log(p1.getfullName())
// p1.address = "navin kavsan"

// // console.log(p1.address)

// console.log(p1)

// // console.log(Parent.toString())

// delete p1.address   ;
// console.log(p1)

// const p2 = new Parent("aditya" , "malve");

// console.log(p2)


// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // Refe

function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();