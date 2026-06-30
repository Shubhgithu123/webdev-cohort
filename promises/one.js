// console.log("hello world start")



// // https://api.github.com/users

// // const p1 = fetch("https://api.github.com/users")



// // console.log(p1)

// // const p2 = p1.then((responce)=>{
// //     // console.log(responce)//byte format
// //     // console.log(responce.json())//returns promise as it is a asynchronous or heavy task which will take time to execute
// //     return responce.json();
// // })

// // p2.then((responce)=>{
// //     // console.log(responce.length)
// //     // for(let n of responce){
// //     //     console.log(n.id , n.login)
// //     // }
// // })

// // fetch("https://api.github.com/users")
// // .then(function(responce){
// //     console.log(responce)
// // })


// fetch("https://api.github.com/users")
// .then((responce)=>{
//     return responce.json();
// })
// .then((data)=>{
//     // console.log(data)
//     // for(let i = 0 ; i<data.length;i++){
//     //     let str = ""
//     //     for(let j = 0 ; j<=i;j++){
//     //         str += data[i].id+" "
//     //     }
//     //     console.log(str)
//     // }
// })

// const j1 = {
//     name:"shubham",
//     age:30,
//     addrress :"paithan",
//     pincode: undefined,
//     greet : function(){
//         console.log("hello shubham")
//     }
// }

// const d = JSON.stringify(j1)
// console.log(d)
 
// console.log("hello world end") 

// zomato simulation

const orderDetails = {
    orderId : 111,
    food:["Pizza","Biryani","coke"],
    cost:620,
    customer_name : "Rohit",
    customer_location : "Dwarka",
    restaurant_location:"Delhi"
}

function placedOrder (orderDetails){

    console.log(`${orderDetails.cost} Payment is in progress`)

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Payment is received and order get placed");
            orderDetails.status = true;
            resolve(orderDetails)
        },3000)
    })

}

function preparingOrder (orderDetails){
    console.log(`Your food preparation started of ${orderDetails.food}`);

    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log("Your order is prepared now");
            orderDetails.token = 123;
            resolve(orderDetails);
        }, 3000);
    })
}

function pickupOrder (orderDetails){
        console.log(`DElivery boy is on way to pick up order from ${orderDetails.restaurant_location}`);

        return new Promise ((resolve , reject)=>{
          setTimeout(() => {
            console.log("I have picked up the order");
            orderDetails.received = true ; 
            resolve(orderDetails);
          }, 3000);
        })
}

function deliverOrder (orderDetails){
        console.log(`I am on my way to deliver order ${orderDetails.customer_location}`);

        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Order delivered successfully");
                orderDetails.delivery = true;
            },3000)
        })
}

placedOrder(orderDetails)
.then((res)=>preparingOrder(res))
.then((res)=>pickupOrder(res))
.then((res)=>deliverOrder(res))