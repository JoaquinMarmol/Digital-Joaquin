const prompt = require("prompt-sync")({signint:true}); 

//CIFRADO CESAR
/* El cifrado de César o cifrado por desplazamiento es un simple cifrado por sustitución. 
Lo que se hace es reemplazar todas las letras por otras del alfabeto.
 lo que necesitás descubrir entonces es cuántas posiciones y en qué dirección */


let quote = 'HSR SGD KHSSKD SGHMFR';

function cifradoCesar(frase){
    let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let frase2 = '';

    for (caracter of frase){ //Paso por cada letra de la frase
        if (caracter == ' '){ //Si el caracter es un espacio, a la frase nueva le sumo un espacio
            frase2+= ' ';
        }
        else {
            let indiceLetra = abecedario.indexOf(caracter); //El indice de la letra es la ubicacion en el abecedario (La A es 0, La B es 1, ...)
            let nuevoIndice = 0; //Creo un nuevo indice, que será el del Cesar (+1) 
                                // y lo igualo a cero, ya que en el caso de la Z (long abc) el indice será 0 (A)
            if (indiceLetra + 1 != abecedario.length){ 
                nuevoIndice = indiceLetra + 1; //Si la letra NO es la Z, el nuevo indice = indice anterior + 1
            }
            frase2 += abecedario[nuevoIndice]; //A la frase le agrego la letra del abecedario con el nuevo indice
        }
    }
    return frase2; //Cuando termina de recorrer el for, retorno la frase nueva
}

console.log(cifradoCesar(quote));


//REPONER STOCK
/*Tenemos un local con productos en las góndolas y nos gustaría que una función nos indique
si hay que reponer stock de algún producto, informando en qué góndola y estante se encuentra. 
Tener en cuenta que siempre debe haber dos productos o más de cada uno. ¿Cómo representarías las góndolas y 
los productos? (Objeto literal con propiedad góndolas que tenga un array de arrays. 
Dentro de cada array un objeto literal con el producto y la cantidad disponible en ese momento).*/
let stock = {
    gondolas: [
        //gondola 1: higiene personal
        [
            {
                producto: 'desodorante',
                cantidad: 50,
                estante: 1,
            },
            {
                producto: 'jabon',
                cantidad: 1,
                estante: 3,
            }
        ],
        //gondola 2: cuidado del pelo
        [
            {
                producto: 'shampoo',
                cantidad: 2,
                estante: 2,
            },
            {
                producto: 'acondicionador',
                cantidad: 25,
                estante: 4,
            }
        ],
        //gondola 3: maquillaje
        [
            {
                producto: 'desmaquillante',
                cantidad: 0,
                estante: 1,
            },
            {
                producto: 'rimmel',
                cantidad: 1,
                estante: 3,
            }
        ]  
    ]   
}

function seccionGondola(num){
    let seccion;
    if (num === 0){
        num = 1;
        seccion = 'higiene personal';
    }
    else if(num === 1){
        num = 2;
        seccion = 'cuidado del pelo';
    }
    else if(num === 2){
        num = 3;
        seccion = 'maquillaje';
    }
    return num + ' (' + seccion + ')'; 
}

function hayStock(listaGondolas){
    for(let gondola of listaGondolas.gondolas){
        let numGondola = listaGondolas.gondolas.indexOf(gondola);
        for(let producto of gondola){
            if(producto.cantidad < 2){
                console.log('Se necesita reponer ' + producto.producto  +' en la gondola '+ seccionGondola(numGondola) + ', estante ' + producto.estante);
            }
        }
    }
}

console.log(hayStock(stock));


//ES PRIMO
/* Hacer una función que dado un número indique si es primo o no —sólo es divisible por sí mismo y por 1—.*/

function esPrimo(num){
    for (i=0; i < num; i++){
        if (num%i == 0 && i!=1 && i!=num){
            return num + ' no es primo'
        }
    }
    return num + ' es primo';
}

console.log(esPrimo(3));
console.log(esPrimo(4));
console.log(esPrimo(21));
console.log(esPrimo(19));

//KIOSCO DE CARAMELOS
/* Se pide que a partir de un valor inicial de stock de caramelos, nuestra aplicación espere 
el ingreso de un usuario todo el tiempo que solicita una cantidad X de caramelos. Deberá escribir en consola 
“Recibiste X caramelos. Quedan ??” si es que queda alguno, y, caso contrario, continuar con el punto b. 
Si se terminan, deberá terminar la ejecución del programa con un mensaje indicando que ya no hay más caramelos disponibles.
*/

function pedir(){
    
    return pedido;
}
function caramelos(cantCaramelos){
    let pedido = parseInt(prompt('Ingrese la cantidad a caramelos que desea: '));
    while (pedido > cantCaramelos){
        pedido = parseInt(prompt('Ingrese una cantidad correcta de caramelos: '));
    }

    while (pedido <= cantCaramelos){
        cantCaramelos -= pedido;
        console.log('Recibiste '+ pedido + ' caramelos, quedan '+ cantCaramelos);
        if (cantCaramelos == 0){
            return 'Ya no hay caramelos, anda a otro kiosco';
        }
        pedido = parseInt(prompt('Ingrese la cantidad a caramelos que desea: '));
        while (pedido > cantCaramelos){
            pedido = parseInt(prompt('Ingrese una cantidad correcta de caramelos: '));
        }
    }
}

console.log(caramelos(50));

/*Contador de palabras: dado un texto, contar cuántas palabras tienen tilde.
Pista: dividir primero en palabras y luego recorrerlas buscando si tienen tilde.
*/

function quitarAcentos(cadena){
	const acentos = {
        'á':'a',
        'é':'e',
        'í':'i',
        'ó':'o',
        'ú':'u',
        'Á':'A',
        'É':'E',
        'Í':'I',
        'Ó':'O',
        'Ú':'U'
    };
	return cadena.split('').map( letra => acentos[letra] || letra).join('');
    //Separo la cadena en un array de letras con el split
    //El map creará un nuevo array a partir del array anterior (en este caso, las letras)
    // Analizo cada letra y si está entre mi lista de letras con acetos lo reemplazo por la misma letra sin acento
    // Si no está en esa lista (incluye espacios), mantengo la misma letra
    //Una vez que hice eso con cada letra, el map me creo una nueva cadena --> yo la uno con el join
}


console.log(quitarAcentos('Aquí estaré esperándote'));
console.log(quitarAcentos('AHÁ YO SABÍA QUE TENÍA RAZÓN'));