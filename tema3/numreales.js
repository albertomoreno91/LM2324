let numeros = []

function anadir() {
    if (document.getElementById('numero').value == "")
        alert('Intruduzca un número')
    else {
        numeros.push(parseFloat(document.getElementById('numero').value))
        document.getElementById('array').innerHTML = numeros.join(', ')
        document.getElementById('numero').value = ""
    }
}

function sumar() {
    if (numeros.length < 2) {
        alert('Introduzca al menos dos números en la cadena')
    }

    else {
        function sumarArray(array) {
            let suma = 0;
            for (let i = 0; i < array.length; i++) {
                suma += array[i];
            }
            return suma;
        }
        document.getElementById('resultado').innerHTML = sumarArray(numeros)
    }
}

function multiplicar() {
    if (numeros.length < 2) {
        alert('Introduzca al menos dos números en la cadena')
    }

    else {
        function multArray(array) {
            for (let i = 0; i < array.length; i++) {
                mult += array[i];
            }
            return mult;
        }
        document.getElementById('resultado').innerHTML = multArray(numeros)
    }
}

function reset() {
    numeros = []
    document.getElementById('array').innerHTML = numeros
    document.getElementById('resultado').innerHTML = ""
}
