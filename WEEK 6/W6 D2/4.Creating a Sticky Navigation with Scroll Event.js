const section1 = document.querySelector('#section--1');

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords)

window.addEventListener('scroll', function (e) {
    if (window.scrollY > initialCoords.top) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
});