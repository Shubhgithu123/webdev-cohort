

let draggedCard = null;
let rightClickedCard = null;
document.addEventListener("DOMContentLoaded",loadTaskfromlocalstorage);
function addTask(columnId){

    const inp = document.getElementById(`${columnId}-inp`);
    
    const taskText = inp.value.trim();
    // console.log(inp.value);

    if(taskText === ""){
        inp.value = "";
        return;

    }
    else{

    const taskDate = new Date().toLocaleString()
    const taskElement = createTaskElement(taskText,taskDate);

    // console.log(taskDate)

    document.getElementById(`${columnId}-task`).append(taskElement);
    updateTasksCount(columnId);
    saveTasktoLocalstorage(columnId,taskText,taskDate);

    inp.value = "";


    }

}

function createTaskElement(taskText,taskDate){
    // const taskElement = document.createElement('div');

    // const dateElement = document.createElement('small');

    // dateElement.classList.add("time");

    // dateElement.textContent = taskDate;

    // taskElement.textContent = taskText;

    // taskElement.classList.add("card");

    // taskElement.append(dateElement);

    // // taskElement.setAttribute("draggable",true)

    // taskElement.draggable = true;

    // taskElement.addEventListener("dragstart",dragStart)
    // taskElement.addEventListener("dragend",dragEnd)
    // taskElement.addEventListener("contextmenu",function (e){
    //     e.preventDefault()

    //     rightClickedCard = this;
    //     showContextMenu(e.pageX,e.pageY);

    // })
   
    const taskElement = document.createElement("div");

    taskElement.innerHTML = `<span>${taskText}</span> <br> <small class="time">${taskDate}</small>`;

    taskElement.classList.add("card");

    taskElement.draggable = true;

    taskElement.addEventListener("dragstart",dragStart);
    taskElement.addEventListener("dragend",dragEnd);
    taskElement.addEventListener("contextmenu",function(e){
        e.preventDefault();
        rightClickedCard = this;

        showContextMenu(e.pageX,e.pageY);
    });

    return taskElement; 
}

function dragStart(e){
    // e.target.classList.add("dragging");
    // setTimeout(()=>{
    // this.classList.add("dragging");

    // },200)
    this.classList.add("dragging");
    // console.log(this)
    draggedCard = this;
}

function dragEnd(e){
    // e.target.classList.remove("dragging");

    this.classList.remove("dragging");
    // draggedCard = null;
    // console.log(draggedCard)

    //updating count manually by providing arraay of column ids
    ["todo","doing","done"].forEach((columnId)=>{
        updateTasksCount(columnId);
        updatetoLocalstorage();
    })
}

const columnn = document.querySelectorAll(".tasks");

columnn.forEach((col)=>{
    col.addEventListener("dragover",dragOver);
   
    // col.addEventListener("drop",(ev)=>{
    //     ev.preventDefault()
    //     // console.log(ev.target)
    // })
})

function dragOver(e){
    e.preventDefault();
    
    const draggedElement = document.querySelector(".dragging")
    // e.target.append(draggedElement)
    // this.append(draggedCard);
    const afterElement = getDragAfterElement();

    if(afterElement === null){
        this.append(draggedCard);
    }
    else{
        this.insertBefore(draggedCard,afterElement);
    }
}

const contextmenu = document.querySelector(".context-menu");

function showContextMenu(x,y){
    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.display = "block";

}

document.addEventListener("click",()=>{
    contextmenu.style.display = "none"
})

function editTask(){
    if(rightClickedCard !== null){

        const newtasktext = prompt("Edit Task - " , rightClickedCard.textContent);

        if(newtasktext !== ""){
            rightClickedCard.textContent = newtasktext;
            updatetoLocalstorage();
        }

    };
}

function deleteTask (){
    if(rightClickedCard !== null){
        const columnId = rightClickedCard.parentElement.id.replace("-task","");
        rightClickedCard.remove();
        updatetoLocalstorage();
        updateTasksCount(columnId);


    }
    //     ["todo","doing","done"].forEach((columnId)=>{
    //     updateTasksCount(columnId);
    // })

}

function updateTasksCount (columnId){

    const count = document.querySelectorAll(`#${columnId}-task .card`).length;
    // const count = document.querySelector(`#${columnId}-task`).children.length;

    document.querySelector(`#${columnId}-count`).textContent = `${count}`
    // console.log(document.querySelector(`#${columnId}-task`).length)

}

function saveTasktoLocalstorage (columnId,taskText,taskDate){

    const tasks = JSON.parse(localStorage.getItem(columnId)) || [] ;

    tasks.push({ text : taskText, date : taskDate });

    localStorage.setItem( columnId , JSON.stringify(tasks) );
}

function loadTaskfromlocalstorage (){
    ["todo","doing","done"].forEach((columnId)=>{
        const tasks = JSON.parse(localStorage.getItem(columnId)) || [] ;

        tasks.forEach(({text,date})=>{
            const teskElement = createTaskElement(text,date);
            document.getElementById(`${columnId}-task`).appendChild(teskElement);
        })
        updateTasksCount(columnId)
        })
}

function updatetoLocalstorage (){
    ["todo","doing","done"].forEach((columnId)=>{
        const tasks = [];
        document.querySelectorAll(`#${columnId}-task .card`).forEach((card)=>{
            const taskText = card.querySelector("span").textContent;
            const taskDate = card.querySelector("small").textContent;

            //  console.log(taskText,taskDate)
            tasks.push({text : taskText , date: taskDate});
        })
        localStorage.setItem(columnId,JSON.stringify(tasks));
    })
}

//drag sorting within column

function getDragAfterElement(){
    
}



