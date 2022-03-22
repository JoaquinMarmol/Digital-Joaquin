let frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

console.log(frutas);

console.log(frutas.length); // lingitud o numero de elementos
console.log(frutas[3]); // acceder al elemento por medio de index

//Mutar o alterar Array
let masFrutas = frutas.push("Uvas") //añadir elementos al final del array
let ultimo = frutas.pop()//Eliminar el último elemento del Array
let nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array
let borrarFruta = frutas.shift("Uvas");//Borra el primer elemento
let posicion = frutas.indexOf("Cereza");//Devuelve el index o posicion del elemento``