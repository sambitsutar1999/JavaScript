console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//Query selector
const header = document.querySelector('.header');
console.log(header);
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section-1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating elements and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message. textContent = "We use cookies for functionaliyy and analytics"
message.innerHTML = 'We use cookies for functionality and analytics<button class="btn btn-close-cookie">I accept it</button>'

// header . prepend (message);
// header.append(message)

header.before(message);
header.after(message);

//delete elements

document.querySelector('.btn-close-cookie').addEventListener('click',function(){
// message.remove();
message.parentElement.removeChild(message);
})
