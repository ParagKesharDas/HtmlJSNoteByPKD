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
