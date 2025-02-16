// Inicializa EmailJS con tu Public Key
emailjs.init('M_PnXzVM2pdJ79IgP');

// Escucha el evento de envío del formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe de manera predeterminada

    const btn = document.querySelector('button');  // Obtiene el botón de envío
    btn.textContent = 'Enviando...';  // Cambia el texto del botón mientras se envía el correo

    // Configuración del servicio y template
    const serviceID = 'default_service';
    const templateID = 'template_8o0pswl';

    // Envía el formulario con EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.textContent = 'ENVIAR';  // Restablece el texto del botón
            alert('Correo enviado con éxito!');
             // Limpia el formulario
             document.getElementById('form').reset();
        })
        .catch((err) => {
            btn.textContent = 'ENVIAR';  // Restablece el texto del botón
            alert('Error al enviar el correo. ' + JSON.stringify(err));
        });
});



