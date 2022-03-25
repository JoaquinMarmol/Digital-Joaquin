/*Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop 
de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado 
con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”. */

function loopDePares(num){
    for (let i=0; i<=100; i++){
        console.log(i);

        if((i+num)%2 == 0){
            console.log('El número '+i+ '+'+num+ '=' + (i+num) +  ' es par');
        }
    }
}

loopDePares(3);

/*Loop de impares con palabra
Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra,
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que,
en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola
la palabra pasada por parámetro.
*/

function loopImpares(num, palabra){
    for (let i=0; i<=100; i++){
        console.log(i);

        if((i+num)%2 !== 0){
            console.log('El número '+i+ '+'+num+ '=' + (i+num) +  ' es impar: ' + palabra);
        }
    }
}

loopImpares(5, 'milanesa');

/*Sumatoria
Deberás crear una función llamada sumatoria que reciba un número como parámetro 
y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. 
Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
sumatoria(8) debe retornar 36 */

function sumatoria(num){
    let suma = 0;
    for(let i=0; i<= num; i++){
        suma+=i;
    }
    console.log(suma);
}

sumatoria(3);
sumatoria(8);

/* Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo
con tantos elementos como el número que le hayas pasado. 

Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

function nuevoArreglo(num){
    let array =[];
    for(let i=1; i<=num; i++){
        array.push(i);
    }
    console.log(array);
}

nuevoArreglo(30);
nuevoArreglo(5);

/*Similar String.split()
Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. 
Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). 
Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]*/

function splitPalabra(palabra){
    let array = [];
    for(let letra of palabra){
        array.push(letra);
    }
    console.log(array);

}

splitPalabra('hola');

/*Carácter del medio
Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro 
y devuelva sus caracteres del medio. 

Ejemplo:
caracterDelMedio(“Digital House”) debe retornar “l”
caracterDelMedio(“hola”) debe retornar “ol”
caracterDelMedio(“cosas”) debe retornar “s” */


function caracteresDelMedio(palabra){
    if (palabra.length % 2 == 0){
        let fin1= (palabra.length/2)-1;
        let inicio2=(palabra.length/2)+1;
        palabra.slice(0, fin1);
        palabra.slice(inicio2, palabra.lenght+1);
        console.log(palabra);
    }
}

let palabra = 'hola';
console.log(palabra.slice(3, 4));

caracteresDelMedio('hola');

/* Mover ceros a lo último
Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
*/

/*Manejando dos arreglos
Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros 
y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. 
Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a*/

/*Conversor a camelCase
Deberás crear una función que convierta de snake_case o kebab-case a camelCase. La primera letra 
del resultado debe estar en mayúsculas solo si en el string original estaba en mayúscula. 
Ejemplo:
“el-guerrero-silencioso” debería convertirse en “elGuerreroSilencioso”
“El_guerrero_silencioso” debería convertirse en “ElGuerreroSilencioso”*/



// PALINDROMO
/*Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no.
Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. 
Ejemplo:
palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false*/
