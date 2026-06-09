const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

if(!Array.prototype.mapping){
    Array.prototype.mapping = function(userFn){
        let arr = [];
        for(let i =0 ; i<this.length ; i++){
            let value = userFn(this[i]);
            arr.push(value);
        }
        return arr;
    }
}
const listofNames = products.filter((item)=>item.price>50).sort((a,b)=>a.price-b.price).mapping((item)=>({product:item.name,category:item.category,price : item.price}))

// console.log(listofNames)


//reduce 

// let res = products.reduce((accumulator,currentValue)=>{
//             return accumulator+currentValue.price;
// },0)

// console.log(res)

// const arr1 = [10,20,30];

// const result = arr1.map(function(num){
//     return;
// });

// console.log(result)

//map tasks

const arr1 = [1,2,3,4];

let ress = arr1.map((num)=>num*2);

let ress1 = arr1.map((num)=>num*num);


// console.log(ress1)

const names = ["shubham" , "rahul" , "amit"];

let ress2 = names.map((name) => name.toUpperCase());

const prices = [100,200,300];

let ress4 = prices.map((price) =>`₹`+`${price.toString()}`)

// console.log(ress4)

const users = [
    {name:"Shubham", age:22},
    {name:"Rahul", age:25},
    {name:"Amit", age:20}
];

let user = users.map((us) => us.name)

// console.log(user)

let user1 = users.map((us) => ({name:us.name}));
// console.log(user1)

let nums = [1,2,3,4];

let num = nums.map( (n) => {
    return {value:n , square: n*n}
} )

// console.log(num)

const users1 = [
    {name:"Shubham", age:22},
    {name:"Rahul", age:17},
    {name:"Amit", age:25},
    {name:"Rohit", age:16}
];


let ans = users1.filter((n) => n.age > 18 ).map((n)=>n.name)

console.log(ans)