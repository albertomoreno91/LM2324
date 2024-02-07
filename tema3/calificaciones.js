let cadena = []

function anadir() {
    let numero = parseFloat(document.getElementById('numero').value)
    if (numero >= 0 && numero <= 10) {
        cadena.push(numero)
        document.getElementById('notas').innerHTML = cadena.join(', ')
        document.getElementById('numero').value = ""
    }
    else
        alert('Introduzca un número del 0 al 10')
}

function calcular() {
    var suma = 0
    var media = 0
    for (i = 0; i < cadena.length; i++) {
        suma += cadena[i]
    }
    media = suma / cadena.length
    document.getElementById('media').innerHTML = media
}

function reset() {
    cadena = []
    document.getElementById('notas').innerHTML = cadena
    document.getElementById('media').innerHTML = ""
    document.getElementById('numero').value = ""
}