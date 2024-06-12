function hi(){
    console.log("Hi");
};

hi();


// js fun ===> fun + object
//object like behaviour
hi.myNewProparty="Hello Bro";
console.log(hi.myNewProparty);
//function gives us free space which is an object known as prototype
console.log(hi.prototype);
// array donot have prototype
const hii=[1,2,3];
// console,log(hi.prototype);//error
// adding property in prototype
hi.prototype.abc="xyz";
hi.prototype.sing=  function(){
    console.log("la la la lala");
};
console.log(hi.prototype,typeof hi.prototype.abc);
hi.prototype.sing();
console.log(typeof hi.prototype.sing);


//

// const userFunction1={
//     is18:function(){
//         return this.Age >=18;
//     },
//     is19:function(){
//         return this.Age >=19;
//     },
//     is20:function(){
//         return this.Age >=18;
//     }
// }


//constactor fun for object creation
function createUser1(fN,lN,Em,Ag,Add){
    const userr=Object.create(createUser1.prototype);//we donot have add funtion here it will just take from parent
    userr.firstName=fN;
    userr.lastName=lN;
    userr.Email=Em;
    userr.Age=Ag;
    userr.Address=Add;
    return userr;
};
//  we just can use prototype to store function
createUser1.prototype.is18=function(){
    return this.Age >=18;
}
createUser1.prototype.is19=function(){
    return this.Age >=19;
}
createUser1.prototype.is20=function(){
    return this.Age >=20;
}

const user2=createUser1("parag keshar","das","pkd360@gmail.com",19,"kolkata");

console.log(user2);
console.log(user2.is18());

//new Keyword
// if we use new fun will start with capital

function CU(f,a){
    // 1.empty object create..so no need to write [this={}]
    this.firstName=f;
    this.age=a;
    //2. return this..it will return the empty object{}
    //3. no need to link with peototype..no need to write [const userr=Object.create(createUser1.prototype);]

};
CU.prototype.is18=function(){
    return this.age >=18;
};
const user1=new /*here is new*/ CU("pkd",18);
console.log(user1,user1.is18())
object=user1
for (const key in object) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     console.log(key)
        
    // }
    // or
    if (object.hasOwnProperty(key)) {
        console.log(key)
        
    }

} 