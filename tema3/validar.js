function validar(elementos) {
    let estanCorrectos = true;
    for (var i = 0; i < elementos.length; i++) {
        document.getElementById("campo" + (i + 1).toString()).innerHTML = "";
        if (elementos[i].value == "" || (i == 5 && !elementos[i].checked)) {
            document.getElementById("campo" + (i + 1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
    }
    if (!validarEmail()) {
        document.getElementById("campo3").innerHTML = "Email no válido";
        estanCorrectos = false;
    }
    if (!validaPassword()) {
        document.getElementById("campo4").innerHTML = "La contraseña no cumple los requisitos"
        document.getElementById("campo5").innerHTML = "La contraseña no cumple los requisitos"
        estanCorrectos = false;
    }
    return estanCorrectos;
}

/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail() {
    var valido;
    var emailField = document.getElementById('email');
    /*Lo siguiente es una expresión regular*/
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(emailField.value)) {
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}

function validaPassword() {
    let passwordOK = true
    let clave1 = document.getElementById('password').value
    let clave2 = document.getElementById('password2').value
    if (clave1.length < 8 || clave1 != clave2) {
        passwordOK = false
    }
    return passwordOK
}