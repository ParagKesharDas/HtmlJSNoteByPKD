//DOM
// Document Object Model
// browser ----> html file--->then see head nad body.....>Up to Down
//  browser will see html and make a Object known as Document and Add it in Window object

console.log(window.document);
console.dir(document)//document objects in js

// selecting one element using element by Id
console.log(document.getElementById("main-heading"))
const mainHeading=document.getElementById("main-heading")

console.dir(mainHeading)
//returing a object

//select element using query selector
const gg=document.querySelector("#main-heading")//can select id with # and class with .
const header=document.querySelector(".header")
console.dir(gg)
console.log(header)//class slecting using query selector

const ff= document.querySelectorAll(".nav-item")
console.log(ff)//will get all elements note list



// selecting one element using element by class
console.log(document.getElementsByClassName)


//we can target and chage text
//1.textContent
const mainHeading1=document.getElementById("main-heading")
console.log(mainHeading1.textContent)//print the main text of the heading
mainHeading1.textContent="Who are You";

const hideContent=document.getElementById("hide-content")
console.log(hideContent.textContent)//it will print


//2.innerText
 
console.log(hideContent.innerText)//it will print


//change style

const div1st=document.querySelector("div")

console.log(div1st)//1st div healine will print
div1st.style.color="blue"
div1st.style.backgroundColor="red";//here we can not write backgrond-color

//get and set attributes..all sky blue are attrebutes class id type etc
const link1st=document.querySelector("a");
console.log(link1st)
console.log(link1st.getAttribute("href"));

link1st.setAttribute("href","#HOME");

console.log(link1st)
//to avoide geting #

console.log(link1st.getAttribute("href").slice(1));

///get multiple elements using getElements by class name
const navItems=document.getElementsByClassName("nav-item")
console.log(navItems,navItems[0])


const navItems1=document.querySelectorAll(".nav-item");
console.log(navItems1,navItems1[1])
//loop
let aTags=document.getElementsByTagName("a")//HTMLcollection
// for (const key of aTags) {
//     key.style.color="green";
//     key.style.backgroundColor="white";
//     key.style.fontWeight=800;
// }
// but forEach we have to convert HTMLcollection to Array
aTags=Array.from(aTags)
aTags.forEach(key => {
    key.style.color="green";
    key.style.backgroundColor="white";
    key.style.fontWeight=800;
});

///innerHTML...>INdide any tag which HTML is there
const headline1=document.querySelector(".headline")
console.log(headline1.innerHTML)
//changeing inner HTML
headline1.innerHTML="<h1>Inner HTML changed</h1>";
console.log(headline1.innerHTML)
//adding innerHTML
headline1.innerHTML+="<button class=\"btn btn-headline\">New Added Button</button>"
console.log(headline1.innerHTML)

//DOM
const sectionTodo=document.querySelector(".section-todo")
console.log(sectionTodo.classList)
// add class
sectionTodo.classList.add("bg-dark1") 
//remove class
sectionTodo.classList.remove("bg-dark1") 
//contains is or not
const ans =sectionTodo.classList.contains("bg-dark") 
console.log(ans)
//then toggle it adds if class is not there ..or removes if class is there
sectionTodo.classList.toggle("bg-dark") //add
sectionTodo.classList.toggle("bg-dark") //remove
//if bg-dark class is written down below section-todo class in css it will work other wise not


///adding element

const todoList=document.querySelector(".todo-list");

todoList.innerHTML="<li>New ToDo</li>"
todoList.innerHTML+="<li>Another New ToDo</li>"
//but adding this is not right

const todoList2=document.createElement("li");
const todoList2Name=document.createTextNode("Teach students");
const todoList3=document.querySelector(".todo-list") 
//here we will add todoList2Name in todoList2
//append adds in last
todoList2.append(todoList2Name)//just in console
// todoList3.append(todoList2)
console.log(todoList2)
//prepend---> adds in first
// todoList2.prepend(to)
todoList3.prepend(todoList2)
// todoList3.remove()//full list will be removed

//clone nodes
const ul =document.querySelector(".todo-list")
const li=document.createElement("li")
li.textContent="New todo 2225";
ul.append(li)
// ul.prepend(li)//with out chole one li go up and down
const li2=li.cloneNode(true)//true use must
ul.prepend(li2)


//static list vs live list
// querySelector-----> static list ...if we add rows donot reflect
// getElementByTagName----->live list ...if we add rows ..it reflects here.

//getting the dimention of element
//heigth width
const sectionTodo1=document.querySelector(".section-todo")
const info =sectionTodo1.getBoundingClientRect();
console.log(info)

// The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.





///info of event
//click event
//mouse movement

//click event

const btnn= document.querySelector(".btn-headline");
console.log(btnn)
// not good
btnn.onclick=function(){
    console.log("clickedddd")
}



// //good
// // function clickMe(){
// //     console.log("You clicked me")
// // }

// // btnn.addEventListener("click",clickMe);//fist which type of  event , function

// //better to use arrow function
btnn.addEventListener("click",()=>{
    console.log("you clicked me",this)//arrow this will return windown ,,normal funtion this will return button
})












