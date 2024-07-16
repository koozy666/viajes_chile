document.addEventListener('DOMContentLoaded', function() {
    
    $('.carousel').carousel({
        interval: 2000 
    });

    
    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar la recarga de la página

        // Mostrar un alert
        alert('Gracias por enviar tu mensaje, te contactaremos a la brevedad.');

        // Opcional: Limpiar el contenido del formulario
        contactForm.reset();
    });
});
