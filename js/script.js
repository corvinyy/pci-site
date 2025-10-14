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

/* (INÍCIO) - Animação do sub texto de mercados */
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".apt-sub-lista", ".apt-botao");
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate");
        }, index * 1000); 
    });
});
