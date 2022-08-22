/*
Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let personas = [
    {usuario: 'Franco',
    likes: 0},
    {usuario: 'Tomas',
    likes: 1},
    {usuario: 'Casagrande',
    likes: 70},
    {usuario: 'Nico',
    likes: 100},
    {usuario: 'Marley',
    likes: 188880},
    {usuario: 'Marley2',
    likes: 1789990},
    {usuario: 'Mirko',
    likes: 5654645464640},
    {usuario: 'Ricky',
    likes: 7880},
    {usuario: 'Javier',
    likes: 90},
    {usuario: 'Ramon',
    likes: 4880},
    {usuario: 'Mirtha',
    likes: 5646770},
    {usuario: 'Yonatan',
    likes: 30},
    {usuario: 'Francisco',
    likes: 60},
    {usuario: 'Alejandro',
    likes: 70},
    {usuario: 'Valentina',
    likes: 50},
]

function ordenArrObjDesc(array, param) {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j][param] < array[j + 1][param]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
    }
    return array;
}

function mostrarObj(array, N){
    for(let i=0; i<N; i++){
        console.log('- - - - - -  ' + (i + 1) + ' - - - - - - ');
        console.log(array[i]);
    }
    return 0;
}

let arrayOrdenado = ordenArrObjDesc(personas, "likes");

console.log('- - - - - - PODIO LIKES - - - - - - ');
console.log(mostrarObj(arrayOrdenado, 3));

console.log('- - - - - - MENOS LIKES - - - - - - ');
console.log(arrayOrdenado[14]);

/* Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */

let temp = [
    {
        dia: 5,
        mes: 4,
        tempMax: 34,
        tempMin: 2,
    },
    {
        dia: 7,
        mes: 3,
        tempMax: 4,
        tempMin: -2,
    },
    {
        dia: 12,
        mes: 11,
        tempMax: 30,
        tempMin: 27,
    },
    {
        dia: 9,
        mes: 1,
        tempMax: 25,
        tempMin: 20,
    },
    {
        dia: 24,
        mes: 9,
        tempMax: 30,
        tempMin: 25,
    }
]

function ordenArrObjAsc(array, param) {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j][param] > array[j + 1][param]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
    }
    return array;
}

console.log("- - - - - - TEMP MIN: MENOR A MAYOR - - - - - - ");
console.log(ordenArrObjAsc(temp, "tempMin"));

console.log("- - - - - - TEMP MAX: MAYOR A MENOR - - - - - - ");
console.log(ordenArrObjDesc(temp, "tempMax"));