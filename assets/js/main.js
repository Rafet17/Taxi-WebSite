let searchBox = document.querySelector("#popup-search-box");
let sideBox = document.querySelector(".popup-sidebox");
const stickyHeader = document.querySelector(".sticky-header");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".header-menu-wrap");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
let searchIcon = document.querySelectorAll(".search-icon");




//*----------------SEARCH START----------------/

let mainSearchIcon = document.querySelector(".main-header .search-icon");
let stickySearchIcon = document.querySelector(".sticky-header .search-icon");

// main-header'daki search-icon'a tıklama olayı ekle
mainSearchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");
});

// sticky-header'daki search-icon'a tıklama olayı ekle
stickySearchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");
});


searchIcon.onclick = () => {
    searchBox.classList.remove("active")
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".sticky-header .search-icon").onclick = () => {
        searchBox.classList.toggle("active");
    };
});

const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            
            if (document.querySelector(".sticky-header")) {
                observer.disconnect(); // 
            }
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

//*----------------SEARCH END----------------/




//*----------------SIDEBOX START----------------/
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

//*----------------SIDEBOX END----------------/



//*----------------STICKY HEADER START----------------/

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


//*----------------STICKY HEADER START----------------/



//*----------------MOBILE MENU HEADER START----------------/

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle("open")
});

//*----------------MOBILE MENU HEADER END----------------/



//*----------------ANIMATIONS START----------------/

function animation() {
    let controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    if (window.matchMedia("(max-width: 900px)").matches) {

        //! Home mobile animations/
        t1.fromTo(".car-holder img", 1, { x: "25rem" }, { x: 0 });
        t1.fromTo(".caption.medium", 1.1, { y: "4rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t1.fromTo(".caption.big", 1.2, { y: "5rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t1.fromTo(".caption.small", 1.3, { y: "6rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t1.fromTo(".button", 1.4, { y: "7rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 }, "-=1");
        t1.fromTo(".slide-in-bottom", 1.3, { y: "25rem" }, { y: 0 }, "-=1");
        t1.fromTo(".fad-in", 1.3, { opacity: 0 }, { opacity: 1 }, "-=1");
        t1.fromTo(".slide-in-top", 1.3, { y: "-25rem" }, { y: 0 }, "-=1");


        //! About mobile animations/
        t2.fromTo(".about-img1", 1.5, { x: "-6rem", opacity: 0 }, { x: 0, opacity: 1 });
        t2.fromTo(".about-img2", 1, { y: "5rem", opacity: 0 }, { y: 0, opacity: 1 });
        t2.fromTo(".about-heading", 1, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
        t2.fromTo(".about-info-text", 1.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });


        //! Service mobile animations/
        t3.fromTo(".service-heading h4, .service-heading h2, .service-heading p", 1, { y: "8rem", opacity: 0 }, { y: 0, opacity: 1 });
        t3.fromTo(".service-item", 1, { y: "4rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });

        new ScrollMagic.Scene({
            triggerElement: "#service",
            triggerHook: 1,
            reverse: false
        }).setTween(t3).addTo(controller);

    }
    else {
        t1.fromTo(".car-holder img", 1, { x: "25rem" }, { x: 0 });
        t1.fromTo(".caption.medium", 1.1, { y: "4rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t1.fromTo(".caption.big", 1.2, { y: "5rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t1.fromTo(".caption.small", 1.3, { y: "6rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t1.fromTo(".button", 1.4, { y: "7rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 }, "-=1");
        t1.fromTo(".slide-in-bottom", 1.3, { y: "25rem" }, { y: 0 }, "-=1");
        t1.fromTo(".fad-in", 1.3, { opacity: 0 }, { opacity: 1 }, "-=1");
        t1.fromTo(".slide-in-top", 1.3, { y: "-25rem" }, { y: 0 }, "-=1");


        //! About animations/


        t2.fromTo(".about-img1", 1, { x: "-6rem", opacity: 0 }, { x: 0, opacity: 1 });
        t2.fromTo(".about-img2", 1, { y: "5rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        t2.fromTo(".about-heading", 1, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");
        t2.fromTo(".about-info-text", 1.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 }, "-=1");

        new ScrollMagic.Scene({
            triggerElement: "#about",
            triggerHook: 0.5,
            reverse: false
        }).setTween(t2).addTo(controller);



        //! Service animations/
        t3.fromTo(".service-heading h4, .service-heading h2, .service-heading p", 1, { y: "4rem", opacity: 0 }, { y: 0, opacity: 1 });
        t3.fromTo(".service-item", 1, { y: "4rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 })

        new ScrollMagic.Scene({
            triggerElement: "#service",
            triggerHook: 0.5,
            reverse: false
        }).setTween(t3).addTo(controller);



        //! Booking animations/
        t4.fromTo(".booking-car", 1, {x:"-8rem", opacity:0}, {x:0, opacity:1})

        new ScrollMagic.Scene({
            triggerElement: "#booking",
            triggerHook: 0.5,
            reverse: false
        }).setTween(t4).addTo(controller);

    }
}


animation();

//*----------------ANIMATIONS END----------------/


//*----------------SWIPER START----------------/

let swiperCards = new Swiper('.mySwiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        900: {
            slidesPerView: 3
        }
    }
});

//*----------------SWIPER END----------------/

















