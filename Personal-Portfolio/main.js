document.addEventListener('DOMContentLoaded', () => {
        const Hamburger = document.getElementById('Hamburger');
        const navList = document.querySelector('.nav-list');
    
        Hamburger.addEventListener('click', () => {
            navList.classList.toggle('open');
            Hamburger.classList.toggle('open');
        });
    });