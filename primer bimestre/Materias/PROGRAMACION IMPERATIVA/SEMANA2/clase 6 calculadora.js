const prompt = require("prompt-sync")({ sigint: true });

let numberA = Number(prompt("Ingrese un numero: "));
let numberB = Number(prompt("Ingrese un numero: "));
let numberC = Number(prompt("Ingrese un numero: "));

let suma = (numberA, numberB) => (resultado = numberA + numberB);
let resta = (numberA, numberB) => (resultado = numberA - numberB);
let multiplicar = (numberA, numberB) => (resultado = numberA * numberB);
let dividir = (numberA, numberB) => (resultado = numberA / numberB);
let cuadradoDeUnNumero = (numberA) => multiplicar(numberA, numberA);

let promedioDeTresNumeros = (numberA, numberB, numberC) => {
  const divisor = 3;
  let resultado = dividir(suma(suma(numberA, numberB), numberC), divisor);
  return resultado;
};

let calcularPorcentaje = (numberA, numberB) => {
  const divisor = 100;
  return multiplicar(numberA, dividir(numberB, divisor));
};

console.log(`
-------------- Testeo de Operaciones / Calculadora --------------
suma: ${suma(numberA, numberB)}
resta: ${resta(numberA, numberB)}
Promedio: El Promedio de ${numberA} + ${numberB} + ${numberC} es igual a ${promedioDeTresNumeros(
  numberA,
  numberB,
  numberC
).toFixed(2)}
Porcentaje: El ${numberB}% de ${numberA} es ${calcularPorcentaje(
  numberA,
  numberB
).toFixed(2)}%
`);
