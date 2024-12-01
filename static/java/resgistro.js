// Código para el carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dot');
let intervalId;

// Función para mostrar un slide específico
function showSlide(index) {
    // Remover clase active de todos los items y dots
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Asegurarse de que el índice esté dentro de los límites
    currentIndex = index;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    
    // Activar el item y dot actual
    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Función para avanzar al siguiente slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Iniciar el carrusel automático
function startCarousel() {
    // Limpiar cualquier intervalo existente
    if (intervalId) {
        clearInterval(intervalId);
    }
    // Crear nuevo intervalo
    intervalId = setInterval(nextSlide, 5000); // Cambiar slide cada 5 segundos
}

// Detener el carrusel
function stopCarousel() {
    clearInterval(intervalId);
}

// Añadir event listeners a los dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        stopCarousel();
        startCarousel(); // Reiniciar el temporizador después de un clic manual
    });
});

// Añadir event listeners para pausar en hover
const carouselSection = document.querySelector('.carousel-section');
carouselSection.addEventListener('mouseenter', stopCarousel);
carouselSection.addEventListener('mouseleave', startCarousel);

// Iniciar el carrusel
showSlide(0);
startCarousel();