const prompt = require("prompt-sync")({ sigint: true });

/* Ejercicio 1*/


let texto = prompt("Ingresa una frase: ");

console.log("La palabra ingresada es: ",texto);

/* Ejercicio 2*/

texto = prompt("Ingresa la palabra o texto: ");

console.log("Hola ",texto," !");

/* Ejercicio 3 */

let numero1 = Number(prompt("Ingresa el primer numero: "));

let numero2 = Number(prompt("Ingresa el segundo numero: "));

console.log("La suma de los numeros es: ", numero1 + numero2);

/* Ejercicio 4 */

let años = parseInt(prompt("Ingresa tu año de nacimiento: "));

console.log("Tienes ",2022 - años," años");

/* Ejercicio 5 */

let numeroIngresado = Number(prompt("Ingresa el numero a comparar "));

function numeroAleatorio(){
    return Math.floor(Math.random() * (10 - 1) + 1);
}

let numeroA = numeroAleatorio();

if (numeroA == numeroIngresado){
    console.log("El numero ingresado es el correcto: ", numeroA);
} else {
    console.log("El numero ingresado no es el correcto: ", numeroA);
}

/* Ejercicio 6 */

for (let i=0;i<=100;i+=2){
    console.log(i);
}

/* Ejercicio 7 */

const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

for (let i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

/* Ejercicio 8 */

let numeroMayor = parseInt(prompt("Ingresa el numero: "));

if (numeroMayor > 500){
    let porcentaje = (numeroMayor * 18) / 100;
    console.log("El 18% es: ", porcentaje);
}

/* Ejercicio 9 */

let elementos = prompt ("Ingresa el elemento, en caso de no querer ingresar mas dar 0: ");
let arreglo = [elementos];
while (elementos != 0){
    elementos = prompt ("Ingresa el elemento, en caso de no querer ingresar mas dar 0: ");
    arreglo.push(elementos);
}

function elemento(arreglos){
    if (arreglos.length >= 3){
        return arreglo[2];
    } else {
        return -1;
    }
}

console.log("El elemento recibido es:",elemento(arreglo));

/* Ejercicio 10 */

let numeroCifras = parseInt(prompt("Ingresa el numero como maximo de 2 cifras: "));

let falta;

if ((numeroCifras < 10) && (numeroCifras > 0)){
    falta = 10 - numeroCifras;
    console.log("La cantidad que falta para que el numero sea de 2 digitos es: ", falta);
} else if((numeroCifras >= 10) && (numeroCifras < 100)){
    falta = 100 - numeroCifras;
    console.log("La cantidad que falta para que el numero sea de 3 digitos es: ", falta);
}

/* Ejercicio 11 */

let n = parseInt(prompt("Cantidad de notas que se ingresaran: "));
let nota;
let notas;
if(n > 0){
    nota = parseFloat(prompt("Ingresa la primera nota: "));
    notas = [nota];
    let i = 1;
    while(i < n){
        nota = parseFloat(prompt("Ingresa la nota: "));
        notas.push(nota);
        i++;
    }
}

function promedio (notas,n){
    let promedios = 0;
    for (let i=0;i<n;i++){
        promedios = promedios + notas[i];
    }
    promedios = promedios / n;
    return promedios;
}

console.log("El promedio es: ",promedio(notas,n));

/* Ejercicio 12 */