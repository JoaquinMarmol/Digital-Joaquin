
/* 
Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un nuevo array por cada tipo de cuenta.
Obtener un nuevo array con las cuentas habilitadas.
Obtener un nuevo array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo. */

const arrayDeObjetosLiterales =
[
    {},
    {},
    {},
    {}
];


const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

/*
Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
*/

function comparoEdades(array){
    let menores = [];
    let mayores = [];
    let treinta = [];

    for (let objeto of array){
        let edad = objeto.edadTitular;
        if (edad < 30){
            menores.push(objeto);
        }
        else if (edad >= 30){
            if (edad == 30){
                treinta.push(objeto);
            }
            mayores.push(objeto);
        }
    }

    console.log('- - - - - - - - - - - - Menores de 30 - - - - - - - - - - - -');
    console.log(menores);

    console.log('- - - - - - - - - - - - Mayores o iguales a 30 - - - - - - - - - - - -');
    console.log(mayores);

    console.log('- - - - - - - - - - - - de 30 - - - - - - - - - - - -');
    return  treinta;
}

console.log(comparoEdades(arrayCuentas));


// Obtener la cuenta con el titular de la misma más joven.
function esMenor(array){
    let menor = array[0].edadTitular;
    let cuentaMenor;

    for (let objeto of array){
        if (objeto.edadTitular < menor){
            menor = objeto.edadTitular;
            cuentaMenor = objeto;
        }
    }
    console.log('- - - - - - - - - - - - cuenta menor edad - - - - - - - - - - - -');
    return cuentaMenor;
}

console.log( esMenor(arrayCuentas));

// Obtener un nuevo array por cada tipo de cuenta.
function tipoCuenta(array){
    let corriente = [];
    let sueldo = [];

    for (let objeto of array){
        if (objeto.tipoCuenta === "corriente"){
            corriente.push(objeto);
        }
        else{
            sueldo.push(objeto);
        }
    }

    console.log(' - - - - - - - - - - - - cuenta corriente - - - - - - - - - - - ');
    console.log(corriente);

    console.log(' - - - - - - - - - - - - cuenta sueldo - - - - - - - - - - - ');
    return sueldo;
}

console.log(tipoCuenta(arrayCuentas));

// Obtener un nuevo array con las cuentas habilitadas. 
function habilitada(array){
    let habilitadas = [];
    for (let objeto of array){
        if (objeto.estaHabilitada){
            habilitadas.push(objeto);
        }
    }

    console.log(' - - - - - - - - - - - - cuentas habilitadas - - - - - - - - - - - ');
    return habilitadas;
}

console.log(habilitada(arrayCuentas));


//Obtener un nuevo array con las cuentas deshabilitadas.
function deshabilitada(array){
    let deshabilitadas = [];
    for (let objeto of array){
        if (!objeto.estaHabilitada){
            deshabilitadas.push(objeto);
        }
    }

    console.log(' - - - - - - - - - - - - cuentas deshabilitadas - - - - - - - - - - - ');
    return deshabilitadas;
}

console.log(deshabilitada(arrayCuentas));

//Obtener la cuenta con el menor saldo.
function PlataANumero (valor){
    let num = valor.replace("$", "");
    num = num.replace(",", "");
    return num;
}

console.log(PlataANumero('$53,567.00'));

/*
function menorSaldo(array){
    menor = PlataANumero(array[0].saldo);
    let menorSaldo;

    console.log(menor);

    for (let objeto of array){
        let sueldoObjeto = PlataANumero(objeto.sueldo);
        if (sueldoObjeto < menor){
            menor = sueldoObjeto;
            menorSaldo = objeto;
    }
}
    console.log('- - - - - - - - - - - - cuenta menor saldo - - - - - - - - - - - -');
    return menorSaldo;
}

console.log( menorSaldo(arrayCuentas)); */

//Obtener la cuenta con el mayor saldo.
