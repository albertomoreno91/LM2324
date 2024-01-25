let numeros = []

function anadir() {
    if (document.getElementById('numero').value == "")
        alert('Intruduzca un número')
    else {
        numeros.push(document.getElementById('numero').value)
        document.getElementById('array').innerHTML = numeros.join(', ')
        document.getElementById('numero').value = ""
    }
}

function sumar() {
    if (numeros.length < 2) {
        alert('Introduzca al menos dos números en la cadena')
    }

    else {
        let suma = numeros.reduce(funcionsuma)
        function funcionsuma(total, value) {
            return total + value
        }
        document.getElementById('resultado').innerHTML = suma
    }
}

function multiplicar() {
    if (numeros.length < 2) {
        alert('Introduzca al menos dos números en la cadena')
    }
}

function reset() {
    numeros = []
    document.getElementById('array').innerHTML = numeros
}
