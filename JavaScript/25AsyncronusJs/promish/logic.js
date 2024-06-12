
//promise:the value what we donot know in present but will know in future
//brwser executes
//it will executes last
const bucket=["vegis","chips","egg","rice","salt","water"]

//promise produce
const firedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("vegis")&&bucket.includes("rice")&&bucket.includes("egg")){
        resolve("Fried Rice");//these will pass in 
    }
    else{
        reject("could not do it");
    }
})
 
//promise consume
//then waits in microtask queue
firedRicePromise.then(
    //if resolves
    (myFriedRice)=>{
        console.log("lets eat",myFriedRice)
    }
    ,
    //if rejects
    (error)=>{
        console.log(error)
    }
)


//function returning promise
function ricePromise(){
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegis")&&bucket.includes("rice")&&bucket.includes("egg")){
            resolve({value:"friedRice"})
        }
        else{
            reject("could not do it")
        }

    })
}

//calling it
ricePromise().then(
    //if resolves
    (myFriedRice)=>{
        console.log("lets eat",myFriedRice)
    }
    ,
    //if rejects
    (error)=>{
        console.log(error)
    }
)
//using promise and setTimeout
//resolve or reject after(both) 2 secs

function myPromise(){
    return new Promise((resolve,reject)=>{
        const val=true
        setTimeout(()=>{
            if(val){
                resolve()
            }
            else{
                reject()
            }
           

        },2000)    
    })
}


myPromise()
    .then(()=>{console.log("promise done")})
    .catch(()=>{console.log("rejected")})

//promise resolve

const p=Promise.resolve(10)
p.then(value=>{
    console.log(value)
})

//promise chaning
function c(){
    return new Promise((resolve,reject)=>{
        resolve("food");
    })
}
c()
    .then(value=>{
        console.log(value);
        value+="&bar";
        return value;
    })
    .then(value=>{
        console.log(value);
        value+="zoon"
        return value
    })
    .then(value=>{
        console.log(value)
    })




const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")
function changeColor(head, nam, color, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (head) {
                head.textContent = nam;
                head.style.color = color;
                resolve();
            }
            else { 
                reject();
            }
        }, time)
    }) 
}
changeColor(head1,"one","red",2000)
    .then(()=>{
        return changeColor(head2, "two", "green", 2000)
    })
    .then(()=>{
        return changeColor(head3, "three", "blue", 2000)
    })
    .then(()=>{
        return changeColor(head4, "four", "brown", 1000,)
    })
    .then(()=>{
        return changeColor(head5, "five", "pink", 2000)
    })
    .catch(()=>{
        console.log("head is not present")
    })
    
















