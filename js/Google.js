let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item2');
const totalItems = carouselItems.length;

function changeSlide() {
  // Elimina la clase 'active' de la imagen actual
  carouselItems[currentIndex].classList.remove('active');

  // Incrementa el índice de la imagen actual y asegura que vuelva al inicio al llegar al final
  currentIndex = (currentIndex + 1) % totalItems;

  // Añade la clase 'active' a la siguiente imagen
  carouselItems[currentIndex].classList.add('active');
}

function moveSlide(direction) {
  // Elimina la clase 'active' de la imagen actual
  carouselItems[currentIndex].classList.remove('active');

  // Cambia el índice según la dirección (izquierda o derecha)
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Añade la clase 'active' a la nueva imagen
  carouselItems[currentIndex].classList.add('active');
}

// Cambiar la imagen cada 7 segundos
setInterval(changeSlide, 7000);

// Inicializar el carrusel
carouselItems[currentIndex].classList.add('active');

