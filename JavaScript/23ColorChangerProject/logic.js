const mainBtn= document.querySelector("button");
const body=document.body;
const currentColor=document.querySelector(".current-color")


mainBtn.addEventListener("click",()=>{
    let randomColor=randomColorGenaretor();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
    console.log(randomColor);
});
function randomColorGenaretor(){
    const red=Math.floor(Math.random() *256);
    const blue=Math.floor(Math.random() *256);
    const green=Math.floor(Math.random() *256);
    const randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}