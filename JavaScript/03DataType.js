let f="parag";
let a= 10;
// number ---> string
a=a+"";
//or
a=String(a);
b="vv";
console.log(a+b);
console.log(typeof(a));
//str--->num
a=+a//add same variable to get number
console.log(typeof(a));
//undefined
let p;
console.log(p);
// but no with const --->error

let g=null;
console.log(typeof(g),g);//bug--->null is not object

// In JavaScript, null is a primitive value and not an object. When you declare a variable and assign null to it, the typeof operator returns "object" which is a historical bug in the language.

// So, in your example code, typeof(g) will return "object" and g will be printed as null. However, it is important to note that null is not a type of object, but a special value that represents the absence of any object value.

let h=BigInt(6554854965262652165);
console.log("Int limitation is :"+Number.MAX_SAFE_INTEGER,h);
// to print it's value use n in last of the ingteger
// let h=BigInt(6554854965262652165n);
// console.log("Int limitation is :"+Number.MAX_SAFE_INTEGER,h);