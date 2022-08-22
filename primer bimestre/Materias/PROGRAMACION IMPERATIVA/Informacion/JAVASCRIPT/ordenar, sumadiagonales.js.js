let array1 = [1,2,3,4,5,6,7,8]

function estaOrdenado (array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true
}
console.log(estaOrdenado(array1))

let nombres = ["martin", "sofia", "guillermo", "lorena", "barbara", "nicolas"]
function saludarNombres (array) {
    for (let i = 0; i < array.length; i++) {
        console.log ("Estimado " + array[i] + ", vote por mi")
    }
}
saludarNombres(nombres)

function piramideInversa(numero) {
    let cantidadCaracteres = "";
  
    for (let i = numero; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        cantidadCaracteres += i;
      }
  
      console.log(cantidadCaracteres);
      cantidadCaracteres = "";
    }
  }
piramideInversa(6)  

let matrizz = [
[4,9,2],
[3,5,7],
[8,1,6]
]

function sumaFila (matriz, numDeFila) {
    let suma = 0;
    for (let i = 0; i < matriz[numDeFila].length; i++) {
        suma += matriz[numDeFila][i]
    }
    return suma
}
console.log (sumaFila (matrizz, 1))

function sumaColumna (matriz, numDeCol) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][numDeCol]
    }
    return suma
}
console.log (sumaColumna (matrizz, 0))

function sumaDiagonal (array) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        acumulador += array[i][i]  
    }
    return acumulador
}
console.log (sumaDiagonal (matrizz))

function diagonalSecundaria (array) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        acumulador += array[i][(array.length - 1) - i]
    }
    return acumulador
}
console.log (diagonalSecundaria (matrizz))