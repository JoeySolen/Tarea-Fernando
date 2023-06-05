// Función para alternar la apertura y cierre del menú lateral
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('closed');
}

//Función para el despliegue del menú acordeón de los tipos de suelo

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
        this.classList.toggle('active');
        const accordionContent = this.nextElementSibling;
    
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
        } else {
            accordionContent.style.display = 'block';
        }
        });
    });
    });