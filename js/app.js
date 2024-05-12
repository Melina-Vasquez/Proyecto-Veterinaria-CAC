function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var isValid = true;


    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Por favor, ingrese su nombre.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }


    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Por favor, ingrese su email.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Por favor, ingrese un email válido.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }


    if (phone.trim() === "") {
        document.getElementById("phoneError").innerText = "Por favor, ingrese su número de teléfono.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }


    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Por favor, ingrese su mensaje.";
        isValid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    // Si el formulario es válido, continuar con el envío
    if (isValid) {
        // Mostrar el modal
        var modal = document.getElementById("myModal");
        var messageElement = document.getElementById("successMessage");
        modal.style.display = "block";
        
        // Cerrar el modal después de 5 segundos y refrescar la página
        setTimeout(function() {
            modal.style.display = "none";
            window.location.reload();
        }, 3000);
    }

    // Detener el envío del formulario
    return false;
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
