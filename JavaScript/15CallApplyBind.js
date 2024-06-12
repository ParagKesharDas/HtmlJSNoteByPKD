//Call
function info(hobby,pet){
    console.log(this.fiN ,this.a,hobby,pet);
};
const p1={
    fiN:"Parag",
    a:22,
    about:info
 };//fin about,a these are property and after taht their value

const p2={
    fiN:"Sydney",
    a:21
 };
 p1.about(p2)//When p1.about(p2) is called, it invokes the about method of p1, passing p2 as the this value. This means that within the info function, this refers to p2. Therefore, the console.log() statement will log "Sydney", 21, and the values of the hobby and pet parameters.
 p1.about.call(p2)
 //we also can pass extra argument through call

//  In the original code, p1.about(p2) uses implicit this binding, which means that the this value is determined by the context in which the function is called. In this case, p1 is used to call the about function, so this refers to p1 within the info function.

//  In contrast, p1.about.call(p2) uses explicit this binding, which means that the this value is explicitly set using the call() method. The first argument passed to call() sets the this value for the function, so p2 is passed as the argument to set this to p2 within the info function.

 p1.about.call(p2,"painting","dog")



function about1(hobby,pet){
    console.log(this.fiN ,this.a,hobby,pet);
};
const p3={
    fiN:"Parag",
    a:22,
 };
const p4={
    fiN:"Sydney",
    a:21 

};
//apply
about1.apply(p2,["painting","dog"])
// the apply() method is used to invoke the about1 function with p2 as the this value, and with the hobby and pet arguments set to "painting" and "dog", respectively.

//bind
const find=about1.bind(p2,"painting","dog")
find();//here we store and call
// With the bind() method, an object can borrow a method from another object.
// here we are borrowing about1 fun and pass the this as p2 

//arrow fun---->takes this from sourrouding..this not works

const about2=()=>{
    console.log(this.fiN ,this.a);
};
const p5={
    fiN:"Parag",
    a:22,
    about:about2
 };
p5.about(p5)



















