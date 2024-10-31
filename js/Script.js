
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
/*1. Variable slideIndex


let slideIndex = 0;
¿Qué hace?: Declara una variable global slideIndex e inicializa su valor en 0.
Propósito: Esta variable se utiliza para llevar la cuenta de cuál es la diapositiva (o "slide") actualmente visible en el carrusel.
2. Llamada a showSlides(slideIndex)

showSlides(slideIndex);
¿Qué hace?: Llama a la función showSlides pasando slideIndex como argumento.
Propósito: Inicializa la primera diapositiva a mostrar en el carrusel (que es la diapositiva en la posición 0, es decir, la primera).
3. Función moveSlides(n)

setInterval(function() {
    moveSlides(1); // Avanza a la siguiente diapositiva
}, 10000);
¿Qué hace?: setInterval() ejecuta la función especificada repetidamente cada cierto intervalo de tiempo.
Función anónima: En este caso, la función anónima dentro de setInterval llama a moveSlides(1) cada 10 segundos (10000 milisegundos).
moveSlides(1): Llama a la función moveSlides con 1 como argumento, lo que provoca que el carrusel avance a la siguiente diapositiva.
Flujo del avance automático:

Cada 10 segundos, moveSlides(1) se ejecuta automáticamente.
Esto incrementa el slideIndex y muestra la siguiente diapositiva.
Si el carrusel llega a la última diapositiva, slideIndex se restablece a 0 y comienza de nuevo desde la primera diapositiva.


function moveSlides(n) {
    showSlides(slideIndex += n);
}
¿Qué hace?: Define una función que mueve el carrusel a la siguiente o anterior diapositiva.
Parámetro n:
Si n es 1, se moverá a la siguiente diapositiva.
Si n es -1, se moverá a la diapositiva anterior.
¿Cómo lo hace?: Suma n al slideIndex actual y llama a showSlides con el nuevo valor de slideIndex.
Propósito: Permitir que el usuario avance o retroceda entre las diapositivas del carrusel.
4. Función showSlides(n)

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
¿Qué hace?: Define la función showSlides que muestra la diapositiva correspondiente en el carrusel y oculta las demás.
Paso a paso:
Declaración de variables:

let slides = document.getElementsByClassName("carousel-item");
slides: Obtiene todas las diapositivas con la clase carousel-item y las almacena en una colección (array-like).
Ajuste del slideIndex:

if (n >= slides.length) { slideIndex = 0; }
if (n < 0) { slideIndex = slides.length - 1; }
Propósito: Se asegura de que el índice slideIndex se mantenga dentro del rango válido:
Si n es mayor o igual al número de diapositivas (slides.length), resetea el índice a 0, para mostrar la primera diapositiva.
Si n es menor que 0, ajusta el índice al último elemento (slides.length - 1), para mostrar la última diapositiva.
Ocultar todas las diapositivas:

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
¿Qué hace?: Itera a través de todas las diapositivas y las oculta estableciendo su display a "none".
Propósito: Asegurarse de que solo una diapositiva esté visible a la vez.
Mostrar la diapositiva actual:

slides[slideIndex].style.display = "block";
¿Qué hace?: Muestra la diapositiva correspondiente al slideIndex actual estableciendo su display a "block".
Propósito: Solo una diapositiva se mostrará en el carrusel en cada momento.
Resumen General
slideIndex lleva la cuenta de la diapositiva actual.
showSlides(n) muestra la diapositiva correspondiente al valor de n y oculta las demás.
moveSlides(n) ajusta el slideIndex hacia adelante o atrás y luego actualiza la diapositiva mostrada llamando a showSlides.
Este código es común en carruseles de imágenes o presentaciones de diapositivas para la web.*/










    