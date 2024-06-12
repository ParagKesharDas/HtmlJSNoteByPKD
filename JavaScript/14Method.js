//Method: function inside object
//this method
function info(){
    console.log(`name is ${this.fiN} and age is ${this.a}`);
};
const p1={
    fiN:"Parag",
    a:22,
    about:info
 };
const p2={
    fiN:"Sydney",
    a:21,
    about:info
 };
//  console.log(p2.about)//this will not work
p2.about();
console.log(this)