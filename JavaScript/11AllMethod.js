
//map methpod
const num=[3,5,8,9,7];
const squre=(number)=>{
    return(number*number);

};

const SqNum=num.map(squre);
console.log(SqNum);


const SqNumIndex=num.map((number,Index)=>{
    return `Index: ${Index},Squre: ${number*number}`
});
console.log(SqNumIndex);

// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
const users=[
    {userId:001,firstName:"Parag"},
    {userId:002,firstName:"Keshar"},
    {userId:003,firstName:"Das"}
]

const userNames=users.map((user)=>{
    return user.firstName;
});
console.log(userNames);

//filter method ---> bool return store in array form

const num1=[3,5,8,9,72,5,18,3,2,10];
const evenNum=num1.filter((num)=>{
    return num%2===0;//bool return TRUE nums will save in array
});
console.log(evenNum);
//reduce method

// aim:sum of all nums in array 
const sum =num1.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;//acuumulator is the sum in every loop 

});
console.log(sum);
// aim:multiply of all nums in array 
const multiply =num1.reduce((accumulator,currentValue)=>{
    return accumulator*currentValue;//acuumulator is the sum in every loop 
});
console.log(multiply);

const users1=[
    {userId:001,firstName:"Parag",price:10000},
    {userId:002,firstName:"Keshar",price:50000},
    {userId:003,firstName:"Das",price:100500}
]
 const totalPrice=users1.reduce((totalP,cuurentP)=>{
    return totalP+cuurentP.price;
 },0/*price of initil accumulator*/);
 console.log(totalPrice)

 //Sort 
 const numm=[10,2,5,8,17,26,78,69]
//  numm.sort();//num-->str--->asci value then sort
//  console.log(numm)
 numm.sort((a,b)=>{
    return a-b;
 })
 console.log(numm)
//logic:
/*
a-b if pos then b,a 
if neg a,b
*/
const users2=[
    {userId:001,firstName:"Parag",price:510000},
    {userId:002,firstName:"Keshar",price:50000},
    {userId:003,firstName:"Das",price:100500}
]

const highPrice=users2.sort((a,b)=>{
    return a.price-b.price;
});
console.log(highPrice);


//find method
//every method
const num10=[10,2,4,8,6,12,14];
const evenNumArray=num10.every((num)=>{
    return num%2===0;//bool return TRUE if all nums are even in array
});
console.log(evenNumArray);
//some method
const num11=[10,2,4,8,6,12,14,3];
const oddNumArrayOne=num11.some((num)=>{
    return num%2===1;//bool return TRUE if one nums are odd in array
});
console.log(oddNumArrayOne);
//splice method