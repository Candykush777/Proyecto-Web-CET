// Inicializa EmailJS con tu User ID
emailjs.init('service_ybw5bdl'); // Reemplaza 'YOUR_USER_ID' con tu User ID de EmailJS

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agrega un evento al formulario para el envío
    document.querySelector('.contacto').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Enviar el formulario con EmailJS
        emailjs.sendForm('service_5ynxzae', 'template_id', this) // Reemplaza 'template_id' con tu Template ID de EmailJS
            .then(function(response) {
                alert('Correo enviado exitosamente!');
                console.log('Success:', response);
            }, function(error) {
                alert('Error al enviar el correo.');
                console.log('Error:', error);
            });
    });
});
