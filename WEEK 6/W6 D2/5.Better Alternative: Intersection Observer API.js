const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

//THEORY
Sticky navigation: Intersection API

const obsCallback = function(entries,observer){
    entries.forEach(entry => console.log(entry));
}

const obsOptions = {
    root:null,thesold:0.1
}

const observer = new IntersectionObserver(obsCallback,obsOptions);

observer.observe(section1);


//PRACTICAL IMPLIMENT IN BANKING WEBSITE
const header = document.querySelector('.header');

const stickNav = function (entries) {
    const [entry] = entries;

    entries.forEach(entry => console.log(entry))

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');

}

const headerObserver = new IntersectionObserver(stickNav,{
    root: null,
    threshold:0
})

headerObserver.observe(header)