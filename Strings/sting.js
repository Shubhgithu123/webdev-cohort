// let str = `amol pralhad wangekar`

// console.log(str.indexOf("lha"))
// console.log(str.split(" ").to())

// Finding all the occurrences of an element

// const array = ["a", "b", "a", "c", "a", "d"];

// const ele = "a";

// const indices = [];

// let idx = array.indexOf(ele);

// while(idx !== -1){
//     indices.push(idx);
//     idx = array.indexOf(ele,idx+1)
// }

// console.log(indices)

// Finding if an element exists in the array or not and updating the array js

// const vegitables = ["potato", "tomato", "chillies", "green-pepper"];

// let veggies = 'green chilli';

// isexists(vegitables,veggies);

// function isexists(vegitables,veggies){
//     if(vegitables.indexOf(veggies) === -1){
//         vegitables.push(veggies)
//         console.log(vegitables)
//     }
//     else{
//         console.log("Vegitable alreaady exists")
//     }
// }

//Date 

// let now = new Date(2025,7,16);

// console.log(now);

// console.log(now.getDay())

// console.log(now.getTime())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())


// let now = new Date("1 January 2030")
// console.log(now.toLocaleDateString())


// console.log(now.getFullYear())
// console.log(now.getDate()+1)

// let arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// console.log(arr[now.getDay()-1])
// let now = new Date("2026-05-12")

// console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} ${now.getHours<12 ? "AM" : "PM"}`)

// let day = String(now.getDate()).padStart(2,"0")

// let month = String(now.getMonth()+1).padStart(2,"0")

// let year = String(now.getFullYear())

// console.log(`${day}/${month}/${year}`)

// let latest = new Date()

// let birthyear = 2003;

// let res = latest.getFullYear() - birthyear

// console.log(res)

// let nextYear = new Date("January 1 2027")

// let currYear = new Date()

// let diff = nextYear.getTime() - currYear.getTime()

// diff = diff / (1000*60*60*24)

// console.log(Math.floor(diff))


//difference between two dates 

// let one = new Date("May 12 2026")

// let two = new Date("May 27 2026")

// let diff = two.getTime() - one.getTime()

// console.log(diff/(1000*60*60*24))
// setInterval(()=>{
// let date = new Date();

// let hours = String(date.getHours()).padStart(2,"0");

// let minutes = String(date.getMinutes()).padStart(2,"0");

// let seconds = String(date.getSeconds()).padStart(2,"0");



//     console.log(`${hours}:${minutes}:${seconds}`)
// },1000)

// let day = new Date().getDay();

// if(day === 0 || day === 6){
//     console.log("weekend");
// }
// else{
//   console.log("weekday")  ;
// }'


// let start = 10 ;

// let interval = setInterval(()=>{
//     console.log(`00:${String(start).padStart(2,"0")}`);
//     start --;
//     if(start < 0)
//         clearInterval(interval)
// },1000)


// let gg = Date.now()

// console.log(gg)

// let date = new Date(gg)

// console.log(date.toLocaleString())



// if(start === 0)
// clearInterval(interval)

let now = new Date("1 May 2026")

console.log(now)