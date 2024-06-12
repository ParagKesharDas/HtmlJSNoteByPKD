let arr=["parag","keshar","das"]
console.log(arr,arr[1])
arr[1]="kumar"
console.log(arr,arr[1])
//array is object in js
arr.push("good");
console.log(arr,arr[1]);
// with push element will add in last point 
let r=arr.pop()
console.log(arr,r)
//push pop work in last position 
arr.unshift("hi")
let r1 =arr.shift()
console.log(arr,r1)
//unshift and shift works in first position.
let arr2=[...arr]//arr1 element will be push in arr
//"..." is spread syntax
let arr3=arr2.slice(1)//slice array from nth to last
console.log(arr3)
//but use const  

// In JavaScript, ... is the spread syntax, which can be used to spread the elements of an array or an object into another array or object.

// In the case of let arr2=[...arr], the spread syntax is used to create a shallow copy of the arr array and assign it to a new variable arr2. This means that arr2 will have the same elements as arr, but they will be two separate arrays in memory. If you modify one array, the other array will not be affected.

// Here's an example:

// scss
// Copy code
// let arr = [1, 2, 3];
// let arr2 = [...arr];

// console.log(arr); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// arr.push(4);

// console.log(arr); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]
// In the code above, we create an array arr with three elements, and then create a new array arr2 using the spread syntax. We then push a new element to arr, and print both arrays to the console. We can see that arr2 is not affected by the push operation and still has the same three elements as before.



