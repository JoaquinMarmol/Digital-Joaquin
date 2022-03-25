/*
A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

console.log('El array que analizo es: ');
console.log(edades);

/* 
Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
*/

function comparoEdades(array){
    let menores = [];
    let mayores = [];
    let dieciocho = [];

    for (let numero of array){
        if (numero < 18){
            menores.push(numero);
        }
        else if (numero >= 18){
            mayores.push(numero);
            if (numero == 18){
                dieciocho.push(numero);
            }
        }
        
    }
    console.log('\n Array con menores de 18: ');
    console.log(menores);

    console.log('\n Array con mayores de 18: ');
    console.log(mayores);

    console.log('\n Array con los de 18: ');
    return dieciocho;
}

// MENOR 
function esMenor(array){
    let menor = array[0];

    for (let number of array){
        if (number < menor){
            menor = number;
        }
    }
    console.log('\n El menor numero es: ');
    return menor;
}

// MAYOR
function esMayor(array){
    let mayor = array[0];

    for (let number of array){
        if (number > mayor){
            mayor = number;
        }
    }
    console.log('\n El mayor numero es: ');
    return mayor;
}

//PROMEDIO
function promedioArray(array){
    let suma = 0;
    for (numero of array){
        suma += numero;
    }
    console.log('\n El promedio es: ');
    return (suma/array.length);
}

//SUMANDO 1
function arraySumado(array){
    let nuevoArray = [];
    for (numero of array){
        nuevoArray.push(numero + 1);
    }

    console.log('\n Un nuevo array sumando 1 a cada numero: ');
    return nuevoArray;
}

console.log(comparoEdades(edades))
console.log(esMenor(edades));
console.log(esMayor(edades));
console.log(promedioArray(edades));
console.log(arraySumado(edades));