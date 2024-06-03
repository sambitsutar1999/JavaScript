//3.How to Pass Arguments to Event Handlers

//Menu Fade Animation

const nav = document.querySelector('.nav');

const handleHover = function(e){
    if (e.target.classList.contains('nav__link')){
        const link = e.target;
        const Siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('.img');

        Siblings.forEach(el =>{
            if(el !== link){
                el.style.opacity = this
            }
        })
        logo.style.opacity = this
    }
}

nav.addEventListener('mouseover',handleHover.bind(0.5))
nav.addEventListener('mouseout',handleHover.bind(1))