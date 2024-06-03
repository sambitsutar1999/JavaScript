//DOM Traversing
const h1 = document.querySelector('h1');

//Child Selection
// console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
// h1. firstElementChild.style.color = 'white';
// h1. lastElementChild.style.color = 'orange';

// Going Upwards - Parent

console.log(h1.parentNode);
console.log(h1.parentElement);

// hl.closest('.header').style.background = 'orange';
// h1.closest('hl').style.backgroundColor = "green"

//Siblings

console. log(h1. previousElementSibling);
console. log(h1. nextElementSibling);

console. log(h1. parentElement.children);
[ ... h1.parentElement. children].forEach((el)=>{
if(el !== h1) el.style. transform = 'scale(0.5)'
});