// script.js

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Toggle burger icon animation
    burger.classList.toggle('toggle');

    // ************ TAMBAHKAN KODE INI ************
    // Kontrol scroll body saat menu aktif
    document.body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : '';
    // ********************************************

    // Animate Links
    if (nav.classList.contains('nav-active')) { // Menu is opening
        navLinks.forEach((link, index) => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
            link.style.transition = `opacity 0.5s ease-in ${index / 7 + 0.3}s, transform 0.5s ease-in ${index / 7 + 0.3}s`;
        });
    } else { // Menu is closing
        // Reset inline styles for the next opening animation
        navLinks.forEach(link => {
            link.style.opacity = '';
            link.style.transform = '';
            link.style.transition = '';
        });
    }
});

// Close nav when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            navLinks.forEach(item => {
                item.style.opacity = '';
                item.style.transform = '';
                item.style.transition = '';
            });
            burger.classList.remove('toggle');

            // ************ TAMBAHKAN KODE INI ************
            document.body.style.overflow = ''; // Reset body overflow saat menu tertutup
            // ********************************************
        }
    });
});

    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });