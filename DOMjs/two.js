// console.log("hello shubham");

const h2 = document.createElement("h2");

h2.textContent = "shubham is here";

// h2.setAttribute("id","heading2")
h2.id = "headinng2"

const h1 = document.getElementById("first");
//before after
// h1.after(h2);
h1.before(h2);

const h3 = document.createElement("h3")
h3.textContent = "Ganpati aane wale hai!!"

h3.id = "heading3"
// h3.className = "ganpati"
// h3.className = "diwali"

h3.classList.add("ganpati","diwali")

h3.style.backgroundColor = "brown"
h3.style.fontSize = "30px"

h2.after(h3);
console.log(h3)

const list = document.getElementById("listing");

// const li = document.createElement("li");

// li.textContent = "milk"

// list.append(li);

// const li2 = document.createElement("li");

// li2.textContent = "tea";

// list.append(li2)

// const li3 = document.createElement("li");

// li3.textContent = "coffee"


// // li.prepend(li3) o/p => coffeemilk

// // li.append(li3) o/p => milkcoffee
// // console.log(li.textContent)
// list.prepend(li3)

// console.dir(list)

// const li4 = document.createElement("li");

// li4.textContent = "paneer";

// // console.log(list.children[1])

// const milk = list.children[1];

// // console.log(milk)

// milk.before(li4)


const arr = ["milk","paneer","tofu","tea","milk"]
//approach 1 = unoptimized
// for( let i = 0 ; i <arr.length ; i++){

//     const li = document.createElement("li");

//     li.textContent = arr[i];

//     list.append(li)
// }

//approach 2 - using createDocumentFragment

// const fragment = document.createDocumentFragment()

// for(let food of arr){

//     const li = document.createElement("li");

//     li.textContent = food;

//     fragment.append(li);

// }

// list.append(fragment)

const temp = [];

for(let food of arr){

    const li = document.createElement("li");

    li.textContent = food;

    temp.push(li)

}


list.append(...temp)


