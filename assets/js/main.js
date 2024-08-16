let searchBox = document.querySelector("#popup-search-box");
let sideBox = document.querySelector(".popup-sidebox");
const stickyHeader = document.querySelector(".sticky-header");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".header-menu-wrap");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

//popup search
document.querySelector(".search-icon").onclick = () => {
    searchBox.classList.toggle("active")
}

document.querySelector(".search-close").onclick = () => {
    searchBox.classList.remove("active")
}

//popup sidebox
document.querySelector(".sidebox-icon").onclick = () => {
    sideBox.classList.toggle("active")
}

document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target) && !document.querySelector(".search-icon").contains(event.target)) {
        searchBox.classList.remove("active");
    }

    if (!sideBox.contains(event.target) && !document.querySelector(".sidebox-icon").contains(event.target)) {
        sideBox.classList.remove("active");
    }
});

window.onscroll = () => {
    sideBox.classList.remove("active");
}

document.addEventListener('DOMContentLoaded', function () {
    const stickyHeader = document.querySelector('.sticky-header');
    const mainHeader = document.querySelector(".main-header");

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > mainHeader.offsetHeight) {
            stickyHeader.classList.add('sticky-fixed-top');
            stickyHeader.style.transform = 'translateY(0)';

        }
        else if (scrollTop < mainHeader.offsetHeight) {
            stickyHeader.style.transform = 'translateY(-100%)';
        }

        mainHeader.offsetHeight = scrollTop;
    });
});

mobileMenuIcon.addEventListener('click', () =>{
    mobileMenu.classList.toggle("open")
})

//*----------------ANIMATIONS----------------/

function animation(){
    let controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t1.fromTo(".car-holder img", 1, { x: "25rem"}, { x: 0});
    t1.fromTo(".caption.medium", 1.1, {y:"4rem", opacity:0}, {y:0, opacity:1}, "-=1");
    t1.fromTo(".caption.big", 1.2, {y:"5rem", opacity:0}, {y:0, opacity:1}, "-=1");
    t1.fromTo(".caption.small", 1.3, {y:"6rem", opacity:0}, {y:0, opacity:1}, "-=1");
    t1.fromTo(".button", 1.4, {y:"7rem", opacity:0}, {y:0, opacity:1, stagger: 0.5}, "-=1");
    t1.fromTo(".slide-in-bottom", 1.3, {y:"25rem"}, {y:0}, "-=1");
    t1.fromTo(".fad-in", 1.3, {opacity:0}, {opacity:1}, "-=1");
    t1.fromTo(".slide-in-top", 1.3, {y:"-25rem"}, {y:0}, "-=1");
}


animation();
    

 
   






