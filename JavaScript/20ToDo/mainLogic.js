const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();//hepls us to stop refreshing the page when we submit
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li")
    const newLiHTML=`
        <span class="text">${newTodoText}</span>
        <div class="todo-byttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
newLi.innerHTML=newLiHTML;
todoList.append(newLi)
todoInput.value="";
})


todoList.addEventListener("click",(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration="line-through";
        liSpan.style.color="white"
        liSpan.parentNode.style.backgroundColor="green"
    };
    if(e.target.classList.contains("remove")){
        // console.log("done")
        const targetLi=e.target.parentNode.parentNode;
        targetLi.remove();
        
    };
})


// diffrent scroll 
const homeLink = document.querySelector('a[href="#home"]');
const todoLink = document.querySelector('a[href="#ToDo"]');
const signupLink = document.querySelector('a[href="#SignUp"]');

const homeSection = document.querySelector('.header');
const todoSection = document.querySelector('.section-todo');
const signupSection = document.querySelector('.section-signup');

homeLink.addEventListener('click', () => {
  homeSection.scrollIntoView({ behavior: 'smooth' });
});

todoLink.addEventListener('click', () => {
  todoSection.scrollIntoView({ behavior: 'smooth' });
});

signupLink.addEventListener('click', () => {
  signupSection.scrollIntoView({ behavior: 'auto' });
});
