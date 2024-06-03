//Reveal Sections Animation

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries,observer){
entries.forEach(entry => console.log(entry))
const [entry] = entries;

if(!entry.isIntersecting) return

entry.target.classList.remove('section--hidden')
observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver (revealSection,{
    root:null,
    threshold:0.15
})

allSections.forEach(function(section){
    section.classList.add('section--hidden');
    sectionObserver.observe(section)
})