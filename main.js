document.querySelector('.menu-btn').addEventListener('click',()=>{
    /*adicionamos una clase  show , pero si la tiene que se la quite  para eso utilizamos el metodo toggle  */
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.showcase', { delay: 200 });
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.footer-links', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });
