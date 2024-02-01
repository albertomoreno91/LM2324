let array = []

function anadir() {
    if (document.getElementById('numero').value == "")
        alert('Introduzca un número')
    else {
        let num = parseFloat(document.getElementById('numero').value)
        array.push(num)
        document.getElementById('cadena').innerHTML = array.join(', ')
        document.getElementById('numero').value = ""
    }
}

function sumar() {
    if (array.length < 2)
        alert('Introduzca al menos dos números')
    else {
        function sumapares(numeros) {
            let suma = 0
            for (i = 0; i < numeros.length; i++) {
                if (numeros[i] % 2 == 0)
                    suma += numeros[i]
            }
            return suma
        }
        document.getElementById('resultado').innerHTML = sumapares(array)
        if (document.getElementById('resultado').innerHTML == 0) {
            alert('Ningún número par encontrado en el array')
            document.getElementById('resultado').innerHTML = ""
        }
    }
}

function reset() {
    array = []
    document.getElementById('cadena').innerHTML = array
    document.getElementById('resultado').innerHTML = ""
}