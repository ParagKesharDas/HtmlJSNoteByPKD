const key1="obj1"
const key2="obj2"

const value1="val1"
const value2="val2"
const obj={
    [key1]:value1,
    [key2]:value2
}
console.log(obj); 
//ComputedProperty
const obj1= {};
obj1[key1]=value1;
obj1[key2]=value2;
console.log(obj1); 


// A computed property in JavaScript is a property whose value is computed dynamically at runtime, based on other properties or methods of an object.

// Computed properties are defined using square bracket notation ([]) and a string expression that specifies the name of the property. The expression can include variables or other JavaScript expressions, and is evaluated when the property is accessed or assigned.

// Here's an example of how to define a computed property in JavaScript:

// javascript
// Copy code
// const obj = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// console.log(obj.fullName); // Output: "John Doe"

// obj.fullName = "Jane Smith";

// console.log(obj.firstName); // Output: "Jane"
// console.log(obj.lastName); // Output: "Smith"
// console.log(obj.fullName); // Output: "Jane Smith"
// In this example, the obj object has a computed property named fullName. The fullName property is defined as a getter/setter pair, which means that it has a getter function that returns the value of the computed property, and a setter function that sets the value of the underlying firstName and lastName properties based on the input value.

// When the obj.fullName property is accessed, the getter function is executed and returns the computed value of "John Doe". When the obj.fullName property is assigned a value of "Jane Smith", the setter function is executed and sets the underlying firstName and lastName properties accordingly.

// Computed properties are a powerful feature of JavaScript that allow you to define dynamic properties that can be customized based on the needs of your application.


let name = 'fullName';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
//   The get[name] is a computed property name of a getter of the Person class. At runtime, when you access the fullName property, the person object calls the getter and returns the full name.
}

let person = new Person('John', 'Doe');
console.log(person.fullName);









//spread oprator

const arr1=[1,2]
const arr2=[3,4]
const arr3=[...arr1,...arr2,..."5678"]
console.log(arr3);
///spread oprator in objects

const obj2={};
obj2["key3"]="value3";
obj2["key4"]="value4";
console.log(obj2);
const newObj={...obj1,...obj2,key69:"value69",..."klm"};
console.log(newObj)

//obj destructuring
let {key3:bbl,key4}=newObj;//here only key name canbe given 
console.log(bbl,key4)//here key3 error

//object inside array 

const users=[
    {userId:001,firstName:"Parag"},
    {userId:002,firstName:"Keshar"},
    {userId:003,firstName:"Das"}
]
for (const i of users) {
    console.log(i,i.userId)
}
const[user1,user2]=users
console.log(user1.firstName)



