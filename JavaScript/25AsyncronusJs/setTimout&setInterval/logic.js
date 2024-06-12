// //timeout asy ...

// console.log("js start");
// const id= setTimeout(()=>{
//     console.log("inside timeout")
// },1000);
// for(let i=0;i<100;i++){
//     console.log("inside loop")
// }
// console.log("settime id is  "+id);
// clearTimeout(id);
// console.log("js end");

// //setIntarvel
// console.log("setIntarvel");


// console.log("js start");
// const id1= setInterval(()=>{
//     console.log("inside timeout")//last ly it will be called in every one sec
// },1000);
// for(let i=0;i<100;i++){
//     console.log("inside loop")
// }
// console.log("settime id is "+id);
// clearTimeout(id);
// console.log("js end");



//
const body=document.body;
const stopButton=document.querySelector("button")
const id=setInterval(()=>{
    const red= Math.floor(Math.random()*126)
    const blue= Math.floor(Math.random()*126)
    const green= Math.floor(Math.random()*126)
    const randomColor= `rgb(${red},${green},${blue})`
    body.style.backgroundColor=randomColor;
},400);

document.addEventListener("click",()=>{
    clearInterval(id);
    stopButton.textContent=body.style.backgroundColor;
    stopButton.style.color=body.style.backgroundColor
})



