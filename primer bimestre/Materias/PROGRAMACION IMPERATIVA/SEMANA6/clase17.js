function fizzBuzz() {
    let num = 1;
    for (let i = 0; i < 100; i++){
        if (num % 3 == 0 && num % 5 == 0) {
        console.log ("fizzBuzz")
        }
        else if (num % 5 == 0) {
        console.log ("buzz")    
        }
        else if (num % 3 == 0) {
        console.log ("fizz")
        }
        else {
            console.log (num)
        }
        num = num + 1
    }    
}
fizzBuzz()

const array1 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function arrayIndice (array, indice) {
    console.log (array[indice])
}

arrayIndice (array1, 1)

function diasMes (numero) {
    if (numero == 1 || numero == 3 || numero == 5 || numero == 7 || numero == 8 || numero == 10 || numero == 12) {
        return 31
    }
    else if (numero == 4 || numero == 6 || numero == 9 || numero == 11) {
        return 30
    }
    else {
        return 28
    }
}

console.log (diasMes(5))

function invertir (numero) {
    let invertido = 0;
    let resto = numero;
    for (let i = 0; 0 < resto; i++) {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
    }
    return invertido
}
console.log (invertir(34567))

const numeros = [
    3,
    6,
    67,
    6,
    23,
    11,
    100,
    8,
    93,
    0,
    17,
    24,
    7,
    1,
    33,
    45,
    28,
    33,
    23,
    12,
    99,
    100
  ];
  
  function repeticionDeNumeros(arr) {
    let numerosRepetidos = [];
    let numeros = [];
    for (let i = 0; i < arr.length; i++) {
      if (numeros.includes(arr[i])){
          numerosRepetidos.push(arr[i])
      }
      else numeros.push(arr[i]);
    }
    return numerosRepetidos;
  }
  
  console.log(repeticionDeNumeros(numeros));