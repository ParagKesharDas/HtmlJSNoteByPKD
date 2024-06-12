//string and array is iterable and objects are not iterable
//set-->iterable...
//no duplicate allowed.it will be ignored 
//can use to sort unique num form array
//store data
//no index based access
//order is not guaranteed
const num= new Set([1,2,3]);
num.add(10);
num.add(7);
const item=[1,2,8];
num.add(item);
console.log(num);
console.log(num.has(1));
console.log(num.has([1,2,8]),num.has(item));
let length =0;
for(let i of num){
    
    length+=1;
    console.log(i);
}
console.log(`the length of set is ${length}`);
for(let j in num){
    console.log(j);
}
