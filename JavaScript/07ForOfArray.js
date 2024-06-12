"use strict";
const arr=["parag","keshar","das"];
//of gives element & in gives index
for(let i of arr){
    console.log(i);
}
for(let i in arr){
    console.log(i);
}

let m=[1,2,3,4,5,6,7];
let [a,,b,c,...restArray]=m;//Array Destracturing
console.log(a,b,c,"restArray is:",restArray); 

