// Inicializa EmailJS con tu User ID
emailjs.init('CETConsulting'); // User de EmailJS

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agrega un evento al formulario para el envío
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Crear un objeto FormData a partir del formulario
        const formData = new FormData(this);

        // Obtener los valores del formulario
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message'),
            contact_method: formData.getAll('contact_method').join(', '), // Métodos de contacto seleccionados
            offers: formData.get('offers') ? 'Sí' : 'No', // Si el checkbox está marcado, asignar 'Sí'
            privacy: formData.get('privacy') ? 'Sí' : 'No' // Lo mismo para el checkbox de privacidad
        };

        // Enviar el formulario con EmailJS
        emailjs.send('service_ybw5bdl', 'template_8o0pswl', data)
            .then(function(response) {
                alert('Correo enviado exitosamente!');
                console.log('Success:', response);
            }, function(error) {
                alert('Error al enviar el correo.');
                console.log('Error:', error);
            });
    });
});


