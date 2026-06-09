if(!Array.prototype.myForeach){
    Array.prototype.myForeach = function(userFn){
        let originalarr = this;

        for(let i =0 ; i< originalarr.length ; i++){
            userFn(originalarr[i],i);
        }
    }
}

let arr = [1,2,3,4,6]

arr.myForeach(function (value,index){
    // console.log(`value:${value} , index:${index}`);
})


// Signature map
//Return ? - New array , each ele iterate , userfn

// const n = arr.map((e)=>e*2);
// console.log(n)

if(!Array.prototype.myMap){
    Array.prototype.myMap = function (userfn){
        const newarr = [];

        for(let i =0 ; i< this.length;i++){
            let value = userfn(this[i],i);
            newarr.push(value);
        }
        return newarr;
    }
}


const n = arr.myMap((e)=>e*2);
// console.log(n)


//filter 
//signature = return array , input: userfn , 
//agar user ka function true return karta hai toh current value ko new array main include kar leta hai

// const n2 = arr.filter((e)=> e%2 == 0)

// console.log(n2)

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function (userfn){
        const newarr = []

        for(let i = 0 ; i < this.length ; i++){
            if(userfn(this[i],i)){
                let values = this[i];
                newarr.push(values);
            } 
        }

        return newarr;
    }
}

const n2 = arr.myfilter((e)=> e%2  == 0)

console.log(n2)