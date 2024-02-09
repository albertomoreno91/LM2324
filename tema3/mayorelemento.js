let cadena = []

function anadir() {
    let numero = parseFloat(document.getElementById('numero').value)
    if (isNaN(numero))
        alert('Introduzca un número')
    else {
        cadena.push(numero)
        document.getElementById('cadena').innerHTML = cadena.join(', ')
        document.getElementById('numero').value = ""
    }
}

function calcular() {
    if (cadena.length < 2)
        alert('Introduzca al menos dos números en la cadena')
    else {
        cadena.sort(function (a, b) { return b - a })
        document.getElementById('resultado').innerHTML = cadena[0]
    }
}

function calcularmenor() {
    if (cadena.length < 2)
        alert('Introduzca al menos dos números en la cadena')
    else {
        cadena.sort(function (a, b) { return a - b })
        document.getElementById('resultado').innerHTML = cadena[0]
    }
}

function reset() {
    cadena = []
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('cadena').innerHTML = ""
}

function imprimir() {
    for (contador = 0; contador < cadena.length; contador++) {
        document.getElementById('cadena').innerHTML += '<br/>' + cadena[contador]
    }
}
