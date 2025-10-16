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



/* ANIMAÇÕES */
document.addEventListener("DOMContentLoaded", function() {

    /* (INÍCIO) Animação do sub texto de mercados (slide sequencial) */
    const items = document.querySelectorAll(".apt-sub-lista");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate");
        }, index * 1000); 
    });

    /* (INÍCIO) Animação do dado para o lado (aparecer ao scroll) */
    const firstItem = document.querySelector(".dados-lista:first-child");
    if (firstItem) {
        const dadosObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    firstItem.classList.add("animate");
                    observer.unobserve(entry.target); // não repetir 
                }
            });
        }, { threshold: 0.3 });
        dadosObserver.observe(firstItem);
    }

    /* Animação dos botões de Fale Conosco e Serviços (aparecer ao scroll, com delay) */
    const buttons = document.querySelectorAll(".apt-botao a");
    if (buttons.length > 0 && buttons[0].parentElement) {
        const buttonsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    buttons.forEach((btn, index) => {
                        setTimeout(() => {
                            btn.classList.add("animate");
                        }, index * 600);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        buttonsObserver.observe(buttons[0].parentElement);
    }

});