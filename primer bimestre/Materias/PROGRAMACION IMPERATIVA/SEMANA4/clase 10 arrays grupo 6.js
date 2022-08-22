let nombres = [ 'Joaquin', 'Paula', 'Gonzalo', 'Joaquin A', 'Victor', 'Katyana'];

// console.table para arrays con objetos
let info = [ {nombre: 'Juan', apellido: 'Perez'}, {hola: 'chau', uno: '1'}];
console.table(info);

//A. Acceder a elementos específicos de un array.
console.log(nombres.indexOf('Joaquin'));

console.log(nombres[2]);

//B. Modificar cada uno de sus elementos e imprimirlos.
nombres[0] = 'Joaquin';
console.log(nombres[0]);

//C. Agregar elementos a un array.
nombres.push('Jorge');
console.table(nombres);


//D. Extraer elementos de un array.
nombres.pop();
nombres.shift();
console.log(nombres);

//E. Comparar elementos de un array con los elementos de otro

let famosos = ['Benzema', 'Jonny Deep', 'Bob Marley'];



/*1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/

let peliculas = [ "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(peliculas);

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

function aMayus(array){
    for (let i=0; i < array.length; i++){
        array[i]=array[i].toUpperCase();
    }
    return array;
}

console.log(aMayus(peliculas));
/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.
Importante: las películas animadas también deberían convertirse a
mayúsculas.*/

let pelis = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];


function uneYmayus (arrayMadre, array){
    for (let i=0; i < array.length; i++){
        arrayMadre.push(array[i]);
    }
    return aMayus(arrayMadre);
}

console.table(uneYmayus(peliculas, pelis));

/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento
del array de películas animadas es un videojuego. Ahora tenés que editar el
código y modificarlo de manera que puedas eliminar ese último elemento
antes de migrar el contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let juego = peliculas.pop();

console.log(juego +  '\n \n'  +peliculas);

/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son
iguales o diferentes. Te confirman que están en el orden adecuado y que solo
traen valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden
en orden al del array resultante de combinar películas con películas animadas.
Es decir, el primer elemento del array de películas general corresponde al
primer elemento de asiaScores y al primer elemento de euroScores, y así
sucesivamente.*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function arraysIguales(array1, array2){
    for (let i=0; i < array1.length; i++){
        if (array1[i] !==array2[i]){
            return false;
        }
    }
}

console.log('Son iguales? ' + arraysIguales(asiaScores, euroScores))
