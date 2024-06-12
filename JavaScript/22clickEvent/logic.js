
const firstBtn=document.querySelector("#one")
firstBtn.addEventListener("click",function(){
    console.log("clciked btn1")
})


// //all btn same fun

// const allBtn=document.querySelectorAll(".my-button button")
// for (const btnn of allBtn) {
//     btnn.addEventListener("click",function(){
//         console.log("clicked bttnn  "+this.textContent)
//     })
// }

// //all btn same fun with arrow fun
// const allArrowBtn=document.querySelectorAll(".my-button1 button");
// for(let btnn of allArrowBtn){
//     btnn.addEventListener("click",(e)=>{
//         console.log(e.currentTarget.textContent)
//     })
// }


//playing with it

//all btn same fun
console.log(document)
const allBtn=document.querySelectorAll(".my-button button")
for (const btnn of allBtn) {
    btnn.addEventListener("click",function(){
        console.log("clicked bttnn  "+this.textContent)
        // window.style.backgroundColor="green"
        document.body.style.backgroundColor="green"
    })
}

//all btn same fun with arrow fun
const allArrowBtn=document.querySelectorAll(".my-button1 button");
for(let btnn of allArrowBtn){
    btnn.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent)
        e.target.style.backgroundColor="yellow"
    })
}


//keypress event
const body=document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key)
});

//mousehover
firstBtn.addEventListener("mouseover",()=>{
    console.log("mouseover")
})