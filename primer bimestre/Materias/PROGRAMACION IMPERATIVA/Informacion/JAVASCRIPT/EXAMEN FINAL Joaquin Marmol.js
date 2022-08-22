const alumnos = [
    {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
    },
    {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
    },
    {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
    },
    {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
    },
    {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
    },
];

console.log(alumnos);
// EJERCICIO 1

//a. ¿Qué tipo de dato contiene la variable ‘alumnos’?

// a) la variable "alumnos" contiene un arreglo con objetos literales.

//b. ¿Qué propiedades tiene la estructura definida en el archivo final.js?

// b) la estructura del archivo final.js contiene las siguientes propiedades: id, nombre, apellido, legajo, notas.

//c. Completa las notas de cada alumno con números enteros positivos
//(5 por alumno)

// c)
alumnos[0].notas.push(4, 7, 9, 6, 10);
alumnos[1].notas.push(5, 8, 7, 9, 7);
alumnos[2].notas.push(9, 8, 8, 9, 8);
alumnos[3].notas.push(10, 5, 5, 6, 10);
alumnos[4].notas.push(6, 4, 7, 3, 5);

console.table(alumnos)

//2. Crear una función que ordene la estructura definida en el archivo final.js
//según la propiedad legajo de forma ascendente.

for (let j = 0 ; j < alumnos.length; j++){
    for(let i = 0 ; i < alumnos.length - 1 ; i++){
        if (alumnos[i].legajo > alumnos [i + 1].legajo){
            [alumnos[i], alumnos[i + 1]] = [alumnos[i + 1] , alumnos[i]]
        }
    }
}

console.table(alumnos)

//3. Crear una función que ordene las notas de cada estudiante de forma ascendente.

function ordenarNotas(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].notas.length; j++){
            if(array[i].notas[j] > array[i].notas[j + 1]){
                let temporal = array[i].notas[j];
                array[i].notas[j] = array[i].notas[j + 1];
                array[i].notas[j + 1] = temporal;
            }
        }
    }
    return array;
}
console.log(ordenarNotas(alumnos));

//4. Crear un método para cada objeto literal que retorne el promedio de notas de un alumno.




//5. Crear una función que retorne un array con todos los estudiantes que
//tengan promedio de nota menor a 7.



// EJERCICIO 2

//A. Crea una matriz de 3x3 con números enteros positivos en cada una de sus posiciones.

let matriz =   [[33, 27, 34],
                [3, 18, 38],
                [7, 21, 30]]

//B. Crear una función que retorne la suma de las diagonales de la matriz.

sumaDiagonal = 0;
for (let i = 0; i< 3; i++){
    sumaDiagonal= sumaDiagonal + matriz[i][i];
    if ( i != 1 );
    sumaDiagonal= sumaDiagonal + matriz[i][2-i]
}
console.log ("la suma de las diagonales es:", sumaDiagonal);

//C. Crear una función que retorne la suma de todos los números dentro
//de la matriz que sean pares.

function sumarPares(){
    let total = 0;
    for(let i=0; i < matriz.lenght; i++){
        for (let j=0; j < matriz[i].length; j++){
        if (p%2 === 0)
        return total= matriz[i][j]; 
        }
        console.log(total)
    }
}
    sumarPares();
//D. Crear una función que retorne la suma de todos los valores de la matriz.

function sumar() {
    let total = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let p = 0; p < matriz[i].length; p++) {
        total += matriz[i][p];
        }
    }
    console.log(total);
}
    sumar();

//E. Crear una función que reciba una matriz y retorne la matriz transpuesta.