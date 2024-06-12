//Map
//Map also store key value pair like object
//In object all keys are string 
//but Mao objects can be num type 
const num= new Map();
num.set('firstName','Parag');
num.set('age',18);
num.set(1,01123);
console.log(num)
//here we can not use 
// console.log(num["age"])
console.log(num.get("age"))
console.log(num.keys())//This output indicates that the MapIterator object contains three keys: "firstName", "age", and 1. The keys are separated by commas and enclosed in double quotes. The order of the keys is the same as the order in which they were added to the Map object using the set() method.
//priniting key line by line
for (const iterator of num.keys()) {
    console.log(iterator,"    ",typeof iterator)
}
//forof in MapObj
 for (const iterator of num) {
    console.log(iterator,typeof iterator)
 }

//destructure  for of
for (let [key,value] of num) {
    console.log(key,value)
 }



//  use
const p1={
    id:1,
    fn:"Parag"
}
const p2={
    id:2,
    fn:"Sydney"
}
const eI= new Map();
eI.set(p1,{age:22,gender:"male"});
eI.set(p2,{age:21,gender:"female"});
console.log(p1.id);
console.log(eI.get(p1).gender)
///cloning using Object.assign


const obj ={
    key1: "val1",
    key2: "val2"
}
const obj1= obj;
obj.key3="val3";//both will cahnge as both are pointing to same array in the meomory
console.log(obj);
console.log(obj1);
//clone
const obj2=Object.assign({},obj)
//In the provided code, obj is an object and {} is an empty object that serves as the target object. 
//The Object.assign() method is used to copy all the enumerable properties of obj into the empty object {}. 
//This creates a new object that has the same properties and values as obj.
obj.key4="val5";
console.log(obj);
console.log(obj2);//no change
///spread oparator---> clone 
const obj3 ={...obj}
obj.key5="val6";
console.log(obj);
console.log(obj3);//no change


///optional changing
const user={
    firstName:"harshal",
    address:{houseNo:'12345'}

}
console.log(user?.firstName);
console.log(user?.address?.houseNo);//if adress does not exest it will not give error(it was giving error because if address donot exist it throw undefined..undefined.houseNo will give error   )










 