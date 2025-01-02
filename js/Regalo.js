// Inicialización de EmailJS
emailjs.init("CETConsulting"); // Reemplaza con tu User ID de EmailJS

// Función para abrir el formulario
function openForm() {
  document.getElementById("popupForm").style.display = "flex";
}

// Función para cerrar el formulario
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Función para enviar el formulario
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const offers = document.getElementById("offers").checked;
  const privacyPolicy = document.getElementById("privacyPolicy").checked;

  if (name && email && offers && privacyPolicy) {
    emailjs
      .send("service_ybw5bdl", "template_8o0pswl", {
        from_name: name,
        email: email,
      })
      .then(
        (response) => {
          console.log("¡Correo enviado con éxito!", response.status, response.text);
          document.getElementById("popupForm").style.display = "none";
          document.getElementById("regalo").style.display = "block";
          document.getElementById("regaloNav").style.display = "none";
          document.getElementById("regaloImagen").style.display = "none";
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          alert("Hubo un problema al enviar el correo. Inténtalo de nuevo.");
        }
      );
  } else {
    alert("Por favor, completa todos los campos y acepta las políticas.");
  }
}


  