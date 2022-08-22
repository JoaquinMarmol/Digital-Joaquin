const prompt = require('prompt-sync')({signit: true})

let pulgada = Number(prompt('Ingrese valor en pulgadas:'))

const aPulgadas = n => n *2.54;

console.log(aPulgadas(pulgada))


let dominio = prompt('Ingrese el nombre de su pagina:')

const nombreDelSitio = nombre => `http://${nombre}.com.ar`;

console.log(nombreDelSitio(dominio))


let frase = prompt('Ingrese una frase:')

const fraseConExc = string => `${string}!`;

console.log(fraseConExc(frase))


let edadDelPerro = prompt('Edad del perro:');

const aEdadPerro = n => n*7;

console.log(aEdadPerro(edadDelPerro));


let sueldoTotal = prompt('Cual es tu sueldo? :');

const sueldoPorHora = n => n / 40;

console.log(sueldoPorHora(sueldoTotal));


let altura = prompt('Cual es tu altura? :');
let peso = prompt('Cual es tu peso? :');

const calculadorIMC = (alturaM, pesoKG) => pesoKG / alturaM ^2;

console.log(calculadorIMC(altura, peso))





