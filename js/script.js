/* Deixar a cor e borda de navegação ativa */

const currentPage = window.location.pathname;

    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


/* (CELULAR/TABLET) Ao clicar na barrinha lateral, o header aparece */
function menuLateral() {
        const nav = document.querySelector('.header-nav');
        nav.classList.toggle('open');
}