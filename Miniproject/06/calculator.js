const buttons = document.querySelector(".buttons");
const resultEl = document.querySelector("#result")

buttons.addEventListener("click",(e)=>{
    const buttonValue = e.target.textContent;

    if(buttonValue === "C"){
        clearResult();
    }
    else if(buttonValue === "="){
        calculateResult();
    }
    else if(buttonValue === "Del"){
        deleteLastvalue(resultEl.value);
    }
    else{
        appendValue(buttonValue);
    }
});

function clearResult(){
    resultEl.value = ""
}

function calculateResult(){

    const inputValue = resultEl.value;
    
    resultEl.value = eval(inputValue)

}

function appendValue(value){

    resultEl.value += value;
    // resultEl.value = resultEl.value + value


}

function deleteLastvalue (value){
    // if(value){
    //     let res = value.slice(0,value.length-1)
    //     console.log(res)
    //     resultEl.value = res
    // }
    console.log(resultEl.selectionStart)
}

const temp = document.querySelector(".temp");

const inp = document.getElementById("inp");

const left = document.getElementById("left");

const right = document.getElementById("right");

temp.addEventListener("click",(e)=>{
    if(inp.value){ 

        if(e.target.id==="left"){
            inp.focus();
            let pos = inp.selectionStart;
            if(pos>0)
            inp.setSelectionRange(pos-1,pos-1);
        }
        else if(e.target.id==="right"){
            inp.focus();
            let pos = inp.selectionStart;
            if(pos<inp.value.length)
            inp.setSelectionRange(pos+1,pos+1);
        }
        else if(e.target.id === "delete"){

            inp.focus();
            
            let pos = inp.selectionStart;

            if(pos > 0) {

                let value = inp.value.slice(0,pos-1) + inp.value.slice(pos);

                inp.value = value ;

                
                inp.setSelectionRange(pos-1,pos-1);

            }

        }
    }
   


})