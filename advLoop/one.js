//foreach . filter , reducer , map ,set

const arr = [10,20,2,30,40];  

// arr.forEach((number , index , arr)=>{
//     console.log(index)
// })

let newarr = arr.filter((n)=>n<3)
console.log(newarr)

arr.filtering = function (userFn){
    let newarr = [];

    for(let i = 0;i<this.length;i++){
        if(userFn(this[i])){
            let value = this[i];
            newarr.push(value);
        }
    }
    return newarr;
}

let q=arr.filtering((m)=>m>3)
// console.log(q)

arr.mapping = function (userFn){
    let newarr = [];
    
    for(let i =0 ; i < this.length ; i++){
        let values = userFn(this[i]);
        newarr.push(values)
    }

    return newarr;
}

let z = arr.mapping((n)=>n*3)
// console.log(z)

let a = [10,30] ;

let res = a.forEach(function (num){
    return num*3;
})

console.log(res)