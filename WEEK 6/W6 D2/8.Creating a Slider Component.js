// Slider

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left')

let curSlide = 0;

const maxSlide = slides.length;

slides .forEach((s,i) => {
    console.log(s);
    s.style.transform = `translateX(${100 * i}%)`;

});

function goToSlide(slide) {
    slides.forEach((s, i) => {
        console.log(s);
        s.style.transform = `transformX(${100 * (i - slide)}%)`;

    })
}

btnRight.addEventListener('click',function(){
    console.log(curSlide, maxSlide);
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    goToSlide(curSlide);
})

btnLeft.addEventListener('click',function(){
    console.log(curSlide, maxSlide);
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide--;
    }

    goToSlide(curSlide);
})