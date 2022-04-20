/* let arrayMatriz = [[0, 1], [2, 3], [4, 5]];
console.log(arrayMatriz[0][0]);
console.log(arrayMatriz[0][1]);
console.log(arrayMatriz[1][0]);
console.log(arrayMatriz[1][1]);
console.table(arrayMatriz);

for (let i = 0; i < arrayMatriz[0].length; i++) {
     console.log(arrayMatriz[0][i]);     
}
for (let i = 0; i < arrayMatriz[1].length; i++) {
     console.log(arrayMatriz[1][i]);     
}

for (let x = 0; x < arrayMatriz.length; x++) {
     for (let y = 0; y < arrayMatriz[x].length; y++){
          console.log(arrayMatriz[x][y])
     }
} */

///// MESA DE TRABAJO /////
/// EJERCICIO 1 ///
/*
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
/* let arr = [
     [10, 21, 13, 29, 15],
     [25, 18, 19, 54, 16],
     [41, 51, 19, 58, 74],
     [20, 25, 26, 18, 59],
     [60, 70, 80, 90, 81]
   ]; */
   
/*
* Luego, escribe un algoritmo para sumar todos
* los numeros en la matriz.
*/
   
/*    function sumar() {
     let total = 0;
     for (let i = 0; i < arr.length; i++) {
       for (let p = 0; p < arr[i].length; p++) {
         total += arr[i][p];
       }
     }
     console.log(total);
   }
   sumar(); */
   
   /// EJERCICIO 2 ///

/* function matriz10(){
     let arr = [[]]
     let num = 1;
     for(let fil = 0; fil < 10; fil++){
          for (let col = 1; col <= 10; col++){
               arr[fil].push(num);
               num++;
          }
          if(arr.length != 10){
               arr.push([]);
          }
     }
     console.log(arr);
     console.table(arr);
}matriz10(); */

// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
     let arr = [[]];
     let num = 1;
     for (let fil = 0; fil < 10; fil++) {
       for (let col = 1; col <= 10; col++) {
         arr[fil].push(num);
         num++;
       }
       if (arr.length !== 10) {
         arr.push([]);
       }
     }
     return arr;
}
   
let matriz10por10 = generarMatriz10por10();
console.log(matriz10por10);
console.table(matriz10por10);

     /// EJERCICIO 3 ///
/* Por último, vamos a generar dos funciones:
     Una va a sumar los valores en la diagonal marcada en rojo.
     La otra va a marcar los valores de la diagonal marcada en verde.
     Ambas funciones deben devolver un resultado único.
Rojo: 505
Verde  505
*/
function sumaRojo(matriz){
     let total = 0;
     for(let i = 0; i<matriz.length; i++){
          for(let q = 0; q<matriz[0].length; q++){
          if(i === q){
               total += matriz[i][q];
               }
          }
     }console.log(total);
     return total
}sumaRojo(matriz10por10);

function sumaVerde(matriz){
     let total = 0;
     for(let i = 0; i<matriz.length; i++){
          for(let end = matriz.length-1; end>=0; end--){
               if(end == matriz.length-1-i){
                    total += matriz[i][end]
               }
          }
     }console.log(total);
     return total
}sumaVerde(matriz10por10);
   