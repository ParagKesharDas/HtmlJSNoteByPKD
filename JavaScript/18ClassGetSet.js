class CreateUser{
    constructor(fN,lN,Em,Ag,Add){
    this.firstName=fN;
    this.lastName=lN;
    this.Email=Em;
    this.Age=Ag;
    this.Address=Add;
    //no need to return
    }
    is18(){
        return this.Age>=18;
    }
}

const user1=new CreateUser("parag keshar","das","pkd360@gmail.com",19,"kolkata")
console.log(user1);
console.log(user1.is18());

//parent child class concept
class Animal{
    constructor(age , type){
        this.age=age;
        this.type=type; 
    }
    is5(){
        return this.age>=5;
    }
}
class Dog extends Animal{
    constructor(age,type,speed){
        super(age,type);
        this.speed=speed;

    }
    // @ override no need to use
    is5(){
 
    }
    is6(){
        return this.age>=6;
    }
    get fulldetails(){
        return `${this.type}`
    }
    // set chageTypeSpeed(a){
    //     const[t,s]=a.split(" ")
    //     this.type=t;
    //     this.speed=s;
    //     console.log(this.type,this.speed)
    // }
    static dd(){
        console.log("hi boss")
    }
}
const doggy= new Dog(5,"BullDog",45);
console.log(doggy);
console.log(doggy.fulldetails)//as wwe have use get in fun we donot have to use fullSetails()
// doggy.chageTypeSpeed("bruno 5" );
//static method..with out creating object
Dog.dd();



