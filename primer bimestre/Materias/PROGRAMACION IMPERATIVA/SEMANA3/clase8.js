const prompt = require("prompt-sync")({ sigint: true });

function siguientes10 (num) {
    for (let i = num + 1; i <= (num + 10); i++) {
        console.log (i)
    }
}
let numero = parseInt(prompt ("Ingrese su numero aqui: "))
siguientes10 (numero)

for (let i = 5; i <= 20; i = i + 3) {
    console.log (i)
}

let sumatoria = 0
for (i = 1; i <=100; i++) {
    sumatoria = sumatoria + i;
}
console.log (sumatoria)

let y = 1
function factoriall (num2) {
    for (i = 1; i <= num2; i++) {
        y = y * i;
    }
    return y
}
let ingresarNumero = parseInt(prompt("ingrese su numero aqui: "))
console.log(factoriall(ingresarNumero))

function fibonacci (num3) {
    for (i = 1; i <= num3; i = i + i) {
        console.log (i)
    }
}
fibonacci (10) 