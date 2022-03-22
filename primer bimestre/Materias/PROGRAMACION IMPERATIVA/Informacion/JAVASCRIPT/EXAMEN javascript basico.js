 /* Variables y operaciones */
// 1.-
	// a) Una variable es figuradamente una caja donde 	puedes guardar distintas cosas, como por ejemplo :
    let number = 23;
    const nombre = 'Joaquin';
    let mayorDeEdad = true;

	// b) La diferencia es que al declarar una variable no estamos asignándole algún valor y al inicializarla si, por ejemplo:
    // Declarar
    let variable;
    // Inicializar
    variable = true;
	// c) La diferencia  que al sumar strings no se suman los números solo se añaden ejemplo:

    function sumar(a, b) {
      return a + b
    }

    console.log(sumar(4, 2)); // Resultado 6
    console.log(sumar('4', '2')); // Resultado '42'


	// d) El operador de más o suma  (+), ejemplo:
    function sumar(a, b) {
      return a + b
    }

    console.log(sumar(4, 2)); // Resultado 6
    console.log(sumar('Jesús ', 'Sotelo')); // Resultado 'Jesús Sotelo'

// 2.-
  const nombre = 'string';
  const apellido = 'string';
  let usuarioPlatzi = 'string';
  let edad = number;
  const email = 'string';
  let mayorDeEdad = boolean;
  let dineroAhorrado = number;
  let deudas = number;

// 3.- Podríamos generar un Objeto
  const objeto = {
    nombre: 'Joaquin',
    apellido: 'Marmol',
    usuarioPlatzi: '@joaquinmarmol',
    edad: 23,
    email: 'joaquinmarmolnecochea@gmail.com',
    mayorDeEdad: true,
    dineroAhorrado: 2000,
    deudas: 500
  }

// 4.-
  const nombreCompleto = objeto.nombre + ' ' + objeto.apellido;
  console.log(nombreCompleto); // Resultado Joaquin Marmol
  const dineroReal = objeto.dineroAhorrado - objeto.deudas;
  console.log(dineroReal); // Resultado 1500


/* Funciones */

// 1.-
  // a) Un bloque de código o de sentencias que se pueden utilizar para generar acciones con los valores que ya se han guardado en variables. En resumen te permiten ahorrar código que se repite mucho
  sumar('Esta función ', 'la declare hasta arriba'); // Resultado 'Esta función la declare hasta arriba'

  // b) Hay que utilizarlas cuando varias sentencias o algoritmos son iguales y solo cambian algunos parámetros, esto nos ayuda ahorrarnos mucho código.
  sumar('Sigo utilizando ', 'la función de suma');

  // c) Los parámetros se definen en la función pueden ser la cantidad de parámetros que recibirá y los argumentos es la información que se la pasara a la función.

  function parametros(p) { // La (p) representa los parámetros
    return p + ' solucionado'
  }

  console.log(parametros('argumento')); // Al declarar la función se le agregan los argumentos R: 'argumento solucionado'

// 2.-
  function precentacion(n, l, nk) {
    return 'Mi nombre es ' + n + ' ' + l + ', pero prefiero que me digas ' + nk
  }
  console.log(presentacion('Juan David', 'Castro Gallegos', 'JuanDC')); // Resultado: 'Mi nombre es Juan David Castro Gallegos, pero prefiero que me digas JuanDC'
  console.log(presentacion('Joaquin', 'Marmol', 'Chinofafi')); // Resultado: 'mi nombre es Joaquin Marmol, pero prefiero que me digas Chinofafi'

/* Condicionales */

// 1.-
  // a) Una condicional indican si se cumple o no una condición.
  function comprobarEdad(edad) {
    if (edad > 18) {
      return console.log('Eres Mayor de edad');
    } else if (edad === 18) {
      return console.log('Apenas y ya eres mayor, ya puedes pasar al teibol');
    } else {
      return console.log('No eres mayor de edad');
    }
  }
  comprobarEdad(17); // Resultado: No eres mayor de edad
  comprobarEdad(18); // Resultado: Apenas y ya eres mayor, ya puedes pasar al teibol
  comprobarEdad(23); // Resultado: Eres Mayor de edad

  // b) if elseif else, switch, Operador Ternario, Todos hacen lo mismo al comprobar si es true o false pero es diferente la sintaxis y la aplicación

  // c) Sí y es lo mas común

// 2.-
  function tipoDeSuscripcion(s) {
    if (s == 'Free') {
      return console.log("Solo puedes tomar los cursos gratis");
    } else if(s == 'Basic') {
      return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if(s == 'Expert') {
      return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if(s == 'Expert +') {
      return console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else {
      return console.log('Que esperas para adquirir tu suscripción');
    }
  }

  tipoDeSuscripcion('Expert +'); // Resultado: Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año
  tipoDeSuscripcion('no tengo'); // Resultado: Que esperas para adquirir tu suscripción

// 3.- Jejeje todavía no soy tan pro.

/* Ciclos */

// 1.-
  // a) Es una forma rápida y sencilla de hacer algo repetidamente
  // b) Los ciclos que hay son los ciclos for, for in, for of, while, do while
  // c) Es cuando no pones un limite al ciclo como un tope o un break y puede llegar a crashear el navegador o incluso el dispositivo en el que se esta ejecutando el ciclo.
  // d) Sí, es funcional en ciertos casos

// 2.-

  let i = 0;
  while( i < 5 ) {
    console.log("El valor de i es: ", i);
    i++;
  }

  let i = 10;
  while( i >= 2 ) {
    console.log("El valor de i es: ", i);
    i--;
  }

// 3.-

  function juego() {
    let resultado;
    do {
      resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
    } while ( resultado !== 4 );
    if (resultado === 4);
    return console.log('¡Eres un GENIO!');
  }
  juego();

/* Listas */

// 1.-
  // a) Un array es un tipo de datos objetos, puedes guardar distintos valores como si fuera una lista y se encuentran seguidos en memoria.
    let lista = ['hola', 'como', 'estas']
  // b) Un objeto te permite guardar datos con claves y valores ejemplo:
  const objetoCarro = {
    marca: 'Bugatti',
    modelo: 'Chiron',
    precio: '1 USD'
  }
  // d) Depende mucho, pero algo que ahorita se me viene a la cabeza, es mejor utilizar un objeto cuando tienes que guardar datos que son repetitivos como un usuario que siempre va a tener las mismas claves y solo cambian los valores.
  // c) Creo que sí.

// 2.-
  function array(a) {
    return console.log(a[0]);
  }

  array(lista);
// 3.-
  for (const value of lista) {
    console.log(value);
  }
// 4.-
  for (const property in objetoCarro) {
    if (Object.hasOwnProperty.call(objetoCarro, property)) {
      const element = objetoCarro[property];
      console.log(element);
    }
  }