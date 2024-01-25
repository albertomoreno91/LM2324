const numeros = []

function anadir() {
    numeros.push(parseFloat(document.getElementById('numero').value))
    document.getElementById('array').innerHTML = numeros
    document.getElementById('numero').value = ""
}

function sumar() {
    
}
