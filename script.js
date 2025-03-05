const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// script.js
window.addEventListener('scroll', () => {
    const navMenu = document.querySelector('.nav-menu');

    if (window.scrollY > 100) {
        navMenu.style.top = '95px';
    } else {
        navMenu.style.top = '130px';
    }
});

