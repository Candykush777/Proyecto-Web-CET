
let slideIndex = 0;
showSlides(slideIndex);

// Función para avanzar automáticamente cada 10 segundos (10000 milisegundos)
setInterval(function() {
    moveSlides(1); // Avanza a la siguiente diapositiva
}, 10000);

function moveSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}











    