// Función para abrir el formulario emergente
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

// Función para cerrar el formulario emergente
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Inicializa EmailJS con tu Public Key
emailjs.init('M_PnXzVM2pdJ79IgP');

// Obtener el formulario por su ID
const form = document.getElementById('contactForm');  // Aquí cambiamos a #contactForm

// Agregar el evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que se recargue la página al enviar el formulario
  
  // Verificamos si los checkboxes están seleccionados
  const offersChecked = document.getElementById('offers').checked;
  const privacyChecked = document.getElementById('privacyPolicy').checked;

  if (!offersChecked || !privacyChecked) {
    alert('Debes aceptar los términos y condiciones para recibir el regalo.');
    return;  // Detenemos el envío si no se cumplen los requisitos
  }

  const btn = form.querySelector('button');
  toggleButtonState(btn, true);  // Deshabilitar el botón y cambiar su texto

  // IDs del servicio y el template de EmailJS
  const serviceID = 'default_service';
  const templateID = 'template_hw8mb6l';
  
  // Enviar el formulario con EmailJS
  emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
          toggleButtonState(btn, false);  // Restablecer el estado del botón
          alert('¡Correo enviado con éxito!');
          
          // Ocultar el formulario y mostrar el PDF
          closeForm();  // Cierra el formulario emergente
          document.getElementById("regalo").style.display = "block";  // Mostrar el regalo

      }, (err) => {
          toggleButtonState(btn, false);  // Restablecer el estado del botón
          alert('Error al enviar el correo: ' + JSON.stringify(err));
      });
});

// Función para manejar el estado del botón (activar/desactivar)
function toggleButtonState(button, isSending) {
  if (isSending) {
    button.textContent = 'Sending...';  // Cambia el texto a 'Sending...'
    button.disabled = true;  // Deshabilita el botón mientras se envía
  } else {
    button.textContent = 'Enviar';  // Restablece el texto del botón
    button.disabled = false;  // Habilita el botón
  }
}









  