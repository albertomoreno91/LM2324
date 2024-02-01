function validar(elementos) {
    let estanCorrectos = true;
    for (var i = 0; i < elementos.lenght; i++) {
        if (elementos[i].value == "") {
            alert('El campo ' + elementos[i].id + ' está vacío');
            estanCorrectos = false;
        }
    }
    return estanCorrectos;
}