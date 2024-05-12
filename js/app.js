function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var department = document.getElementById("department").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var image = document.getElementById("image").value;
    var isValid = true;

    // Validación de nombre, email, teléfono, mensaje, departamento, intereses, género y archivo de imagen

    // Validación de nombre
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Por favor, ingrese su nombre.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Validación de email
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Por favor, ingrese su email.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Por favor, ingrese un email válido.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validación de teléfono
    if (phone.trim() === "") {
        document.getElementById("phoneError").innerText = "Por favor, ingrese su número de teléfono.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Validación de mensaje
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Por favor, ingrese su mensaje.";
        isValid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    // Validación de departamento
    if (department === "") {
        document.getElementById("departmentError").innerText = "Por favor, seleccione un departamento.";
        isValid = false;
    } else {
        document.getElementById("departmentError").innerText = "";
    }


    // Validación de género (al menos uno seleccionado)
    if (!gender) {
        document.getElementById("genderError").innerText = "Por favor, seleccione su género.";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    // Validación de imagen (opcional: verificar si se ha seleccionado un archivo)
    if (image === "") {
        document.getElementById("imageError").innerText = "Por favor, seleccione una imagen.";
        isValid = false;
    } else {
        document.getElementById("imageError").innerText = "";
    }

    // Si el formulario es válido, continuar con el envío
    if (isValid) {
        // Mostrar el modal y redireccionar
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        setTimeout(function() {
            modal.style.display = "none";
            window.location.reload();
        }, 5000);
    }

    // Detener el envío del formulario
    return false;
}

function isValidEmail(email) {
    // Expresión regular para validar email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
