//function that creates object,add key value pair,return object

function createUser(fN,lN,Em,Ag,Add){
    const user={};
    user.firstName=fN;
    user.lastName=lN;
    user.Email=Em;
    user.Age=Ag;
    user.Address=Add;
    user.is18=userFunction.is18;
    return user;
};

//we created this becouse if it was in create with every object made method will creat that takes space;
const userFunction={
    is18:function(){
        return this.Age >=18;
    }
}

const user1=createUser("parag keshar","das","pkd360@gmail.com",17,"kolkata");

console.log(user1);
console.log(user1.is18());

// but when we need to add more and more function we have to change in ctreate function
//here comes parent child function concept

// parent
const obj1={
    key1:"val1",
    key2:"val2"
};
//child
const obj2=Object.create(obj1);
obj2.key3="val23"

console.log(obj1,obj2,"  ",obj2.key2);
console.log(obj2.__proto__,"Or not same","/*obj2.[[prototype]]*/")
//but __proto__ can be presented as [[prototype]] but obj2.[[prototype]] !=obj2.__proto__

// but when we need to add more and more function we have to change in ctreate function
//solve
const userFunction1={
    is18:function(){
        return this.Age >=18;
    },
    is19:function(){
        return this.Age >=19;
    },
    is20:function(){
        return this.Age >=18;
    }
}

function createUser1(fN,lN,Em,Ag,Add){
    const userr=Object.create(userFunction1);//we donot have add funtion here it will just take from parent
    userr.firstName=fN;
    userr.lastName=lN;
    userr.Email=Em;
    userr.Age=Ag;
    userr.Address=Add;
    return userr;
};


const user2=createUser1("parag keshar","das","pkd360@gmail.com",19,"kolkata");

console.log(user2);
console.log(user2.is18());