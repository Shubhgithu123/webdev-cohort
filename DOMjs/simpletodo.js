// const input = document.getElementById("taskInput");

// const addbtn = document.getElementById("addBtn");

// const list = document.getElementById("list")

const taskform = document.getElementById("taskform");

const input = document.getElementById("taskinput")

const list = document.getElementById("list")

taskform.addEventListener("submit",function(e){
    e.preventDefault()
    
    if(input.value.trim()===""){
        // input.placeholder = "please insert text"
        return;
    }

    const task = document.createElement("li");

    task.textContent = input.value.trim();

    const deletebtn = document.createElement("button");

    deletebtn.textContent = "Delete";

    deletebtn.classList.add("delete-btn")

    task.append(deletebtn);

    list.append(task);

    input.value = ""
    input.focus()
})


list.addEventListener('click',function (e){

    if(e.target.classList.contains("delete-btn")){
        
        const element = e.target.closest("li");

        element.remove();

    }

})


const myForm = document.getElementById("loginForm");

myForm.addEventListener('submit',function (e){
    e.preventDefault();

    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget)
})