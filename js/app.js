function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var plan = document.getElementById("plan").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var image = document.getElementById("image").value;
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


    if (plan === "") {
        document.getElementById("planError").innerText = "Por favor, seleccione un departamento.";
        isValid = false;
    } else {
        document.getElementById("planError").innerText = "";
    }



    if (!gender) {
        document.getElementById("genderError").innerText = "Por favor, seleccione su género.";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }


    if (image === "") {
        document.getElementById("imageError").innerText = "Por favor, seleccione una imagen.";
        isValid = false;
    } else {
        document.getElementById("imageError").innerText = "";
    }

 
    if (isValid) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        setTimeout(function() {
            modal.style.display = "none";
            window.location.reload();
        }, 3000);
    }


    return false;
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById("imagen").image