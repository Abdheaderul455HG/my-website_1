const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.height = '60px';
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.height = '80px';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    }
});
