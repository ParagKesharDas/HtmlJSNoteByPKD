


function happyBirthday(name){
    console.log("Happy BirthDay Dear "+name);
    return "Thank You"
}
let m=happyBirthday("Parag")
console.log(m)

//function expression
const happyBirthday1=function(name){
    console.log("Happy BirthDay Dear "+name);
    return "Thank You"    
}
let r=happyBirthday1("Xyro")
console.log(r)

//Arrow function

const happyBirthday2=(name)=>{
    console.log("Happy BirthDay Dear "+name);
    return "Thank You"    
}
let i=happyBirthday1("REX")
console.log(i)

//lexical scope
 //block scope [const ]only works in that block but [Var] has outside the scope
 //function scope works for both inside but not outside funtion
{
    const g="kk"
    var h="ll"
}

console.log(/*g*/h)


function app(){
    const g1="kk"
    var h1="ll"
    
}
// console.log(h1/*,g1*/)


//funtion callback
const dd=(name)=>{
    console.log("Inside dd");
    console.log(`my name is ${name}`)
}
const dd1=(callback,n)=>{
    console.log("1st Inside dd1")
    callback(n);
}

dd1(dd,"parag");

//function returning frunction
function ff(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}

const ans = ff();
ans();

//foreach
const arr=[1,5,6,7,1,3,9]
const myFun=(num,index)=>{
    console.log(`index is ${index} num is ${num}`);
    console.log(`index is ${index} num is ${num*5}`);
}
arr.forEach(myFun);

const users=[
    {userId:001,firstName:"Parag"},
    {userId:002,firstName:"Keshar"},
    {userId:003,firstName:"Das"}
]
//simple function
users.forEach(function(user){
    console.log("user name is ",user.firstName)
} )

// function(user) is a callback function that is passed as an argument to the forEach() method.

// The forEach() method is called on the users array and iterates through each element of the array, executing the callback function once for each element.

// The callback function takes a single parameter user, which represents the current element of the array being iterated over. In this case, the user parameter is an object with two properties userId and firstName.

// Inside the callback function, the console.log() statement is used to print a message to the console that includes the firstName property of the user object.

// So, for each element of the users array, the callback function is executed and the firstName property of the user object is printed to the console.



//arrow function
users.forEach((user)=>{
    console.log("user name is ",user.firstName)
} )