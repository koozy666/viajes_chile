document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el carrusel de Bootstrap con un intervalo de 2 segundos
    $('.carousel').carousel({
        interval: 2000 
    });

    // Añade desplazamiento suave a los enlaces de la barra de navegación
    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Maneja el envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita la recarga de la página
        // Muestra un alert de confirmación
        alert('Gracias por enviar tu mensaje, te contactaremos a la brevedad.');
        // Limpia el contenido del formulario
        contactForm.reset();
    });
});

