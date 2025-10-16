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
    const items = document.querySelectorAll(".apt-sub-lista");
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate");
        }, index * 1000); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".apt-botao a");

    const observer = new IntersectionObserver((entries) => {
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
    }, { threshold: 0.3 }); // ativa quando 30% estiver visível

    if (buttons.length > 0) {
        observer.observe(buttons[0].parentElement);
    }
});