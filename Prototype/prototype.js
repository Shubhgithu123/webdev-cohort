// Object.prototype.shubh= function (){
//     console.log("shubh prototype is created");
// };


// let arr = [1,2,3]
// let ad = "as"
// let as = {}

// arr.shubh()
// ad.shubh()
// as.shubh()


const obj1 = {
    name:"shubham",
    age:23,
    greet : function (){
        console.log("hello ji");
    }

}

const obj2 = {
    account : 30
}

obj2.__proto__ = obj1;

obj2.name = "rohit";

console.log(obj1.name)
console.log(obj2.name)

console.log(obj1.hasOwnProperty("name"))