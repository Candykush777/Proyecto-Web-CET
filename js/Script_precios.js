
    let modal = document.getElementById("infoModal");

    
    let btn = document.getElementById("openModal");

    // Obtener el elemento <span> que cierra el modal
    let span = document.getElementById("closeModal");

    // Cuando el usuario hace clic en el botón, abrir el modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Cuando el usuario hace clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Modal Coaching Grupal
let modalGrupal = document.getElementById("grupalModal");
let btnGrupal = document.getElementById("openGrupalModal");
let spanGrupal = document.getElementById("closeGrupalModal");

btnGrupal.onclick = function() {
    modalGrupal.style.display = "block";
}

spanGrupal.onclick = function() {
    modalGrupal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalGrupal) {
        modalGrupal.style.display = "none";
    }
}

