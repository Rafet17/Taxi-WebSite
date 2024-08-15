let searchBox = document.querySelector("#popup-search-box");
let sideBox = document.querySelector(".popup-sidebox");
const stickyHeader = document.querySelector(".sticky-header");

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






