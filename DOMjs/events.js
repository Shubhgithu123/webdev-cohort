const heading = document.getElementById("heading");

// function handleClick(){
//     heading.textContent = "Hello Shubham Wangekar"
// }

// heading.onclick = function handleClick(){
//     heading.textContent = "hello shubham wangekar"
// }

// heading.addEventListener("click",()=>{
//     heading.textContent = "HELLO SHUBHAM WANGEKAR"
// })

// heading.addEventListener("dblclick",()=>{
//     heading.textContent = "HELLO "
// })
// heading.addEventListener("mouseenter",()=>{
//     heading.style.backgroundColor = "brown"
// })
// heading.addEventListener("mouseleave",()=>{
//     heading.style.backgroundColor = "blue"
// })

// const parent = document.getElementById("parent");

// console.log(parent.children)

// for(let child of parent.children){
//     child.addEventListener("click",()=>{
//         child.textContent = `I am clicked ${child.id}` 
//     })
// }
// console.log()3

//event bubbling

// const answer = document.getElementById('answer');
// const fragment = document.createDocumentFragment();
// const arr = [];
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//    const ans = document.createElement('p');
//    ans.textContent="GrandParent is Clicked"
// //    arr.push(ans)
//    fragment.append(ans)
// answer.append(fragment)


// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//    const ans = document.createElement('p');
//    ans.textContent="parent is Clicked"
// //    arr.push(ans)
// //    answer.after(arr)
//    fragment.append(ans)
// answer.append(fragment)


   
// })

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//    const ans = document.createElement('p');
//    ans.textContent="child is Clicked"
// //    arr.push(ans)
// //    answer.after(arr)
//    fragment.append(ans)
// answer.append(fragment)

// })

// // console.log(arr)
// answer.append(fragment)
// // answer.after(...arr)

// three phases of event bubbling = > 1. capturing phase => addEventListener('',(){},false) by default false , can changed to true
// 2. target phase
// 3. bubbling phase => where from target to its parent all event are triggered gradually one by one 
//  .addEventListener('click',(e){},) this e is the event object which holds all information about which event is triggered  or  on which element is clicked also have some extra information about clientX and ClientY which gives information about from mouse position from top and left and etc.
// e.target gives the information about which element is clicked
//e.stopPropogation() is used to stop event bubbling

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//    console.log('grandparent is clicked');

// },false)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//    console.log('parent is clicked');
// },true)

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//    console.log('child is clicked');
// },false)

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{

//     e.preventDefault()

//     console.log(`${e.target.id} is clicked `)

// })



// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     // console.log(e)
//     // console.log(e.target)
//     const line = document.getElementById('child');
//     line.textContent = `${e.target.id}`
//     // console.log(e.target.id)
//    console.log(`${e.target.id} is clicked`);
// //    e.target.textContent = `${e.target.id}`
//     // grandparent.append(line)
//    setTimeout(()=>{
//     line.textContent = ""
//    },1000)

// },false)

//removing event Listener

const grandparent = document.getElementById("grandparent");
function handleClick (e){
    console.log("shubham wangekar id:",e.target.id)
    // grandparent.removeEventListener('click',handleClick)
    // console.log("currenttarget",e.currentTarget.id)
    // console.log("clickedgtarget",e.target.id)
} 

// // const handleClick = (e) =>{
// //     console.log("shubham wangekar id::",e.target.id)
    
// // }
// grandparent.addEventListener('click',handleClick)


// const btn = document.getElementById("btn");
// const p = document.getElementById("message");

// btn.addEventListener('click',function clickedme(e){
//     console.log(e.target)
//     console.log(e.currentTarget)
//     // p.textContent = "Button Clicked Successfully"
// })

// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener("click", () => {
//     console.log("grandparent");
// });

// const parent = document.getElementById("parent")
// parent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("parent");
// });

// const child = document.getElementById("child")
// child.addEventListener("click", () => {
//     console.log("child");

// });



// const grandparent = document.getElementById("grandparent")
// grandparent.onclick = function (){
//     console.log("clicked on grandparent")
// }

// const parent = document.getElementById("parent")
// parent.onclick = function (){
//     console.log("clicked on parent")
// }

// const child = document.getElementById("child")
// child.onclick = function (e){
//     e.stopPropagation()
//     console.log("clicked on child")
// }


///event delegation 

// const list = document.getElementById("list");

// list.addEventListener('click',function (e){
//     console.log(e.target.textContent)
// })

const list = document.querySelector("#list");

list.addEventListener('click', function (e){
    // console.log(e.target)
    // console.log(e.target.closest("li").textContent)
    // console.log(list.textContent)
   if(e.target.classList.contains("delete-btn")){
     let target = e.target.closest("li");
    target.remove()
    console.log(list.textContent)
   }
})