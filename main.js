// const form = document.querySelector('#form');
// const log = document.querySelector('#log');
// const name = document.querySelector('#name');
// const user = document.querySelector('#user');
// const age = document.querySelector('#age');

// // submit
// form.addEventListener('submit', logName);
// function logName(event) {
//     log.textContent = `form was submitted by user ${user.value}. Name is ${name.value}. Age is ${age.value}`; 
//     name.value = '';
//     user.value = '';
//     age.value = '';
//     event.preventDefault();
// }

// // keyup- triggers when you raise your finger from the keyboard and keydown- when you press your hand on the keyboard
// age.addEventListener('keyup', (event) => {
//     console.log(event.key);
// })

// // focus
// user.addEventListener('focus', () => {
//     console.log('focused');
// })

// // blur 
// age.addEventListener('blur', () => {
//     console.log('blurr');
    
// })

// local storage

const exampleInput = document.querySelector('#exampleInput');
const exampleForm = document.querySelector('form');
const form = document.querySelector('#form');
// variable to catch the data
let inputValue;

// .setItem - to set an item on the local storage. set a value on the key
// 'username' is the key, 'uchenna' is the value 
localStorage.setItem('username', 'uchenna'); 
// .getItem - to get the value using the key
const userName = localStorage.getItem('username'); 
// always take in (event) so you can do event.preventDefault 
form.addEventListener('submit', (event) => {
    exampleInput.value = userName; 
    event.preventDefault();
})

// to remove the key and value 

localStorage.removeItem('username'); 
localStorage.clear(); 

// btoa - a way of encrypting in javascript
// session storage cannot be access on another tab - sessionStorage.setItem or sessionStorage.getItem 