export function dataCollect(name,age){
    console.log(`${name} is the name and age is ${age}`)
}


//one default function is possible .. importing will be with out the {}...imorting name can be any thing that will work as Person
export default class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    info(){
        console.log(this.fname,this.lname,this.age)
    }
}