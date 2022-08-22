const prompt = require("prompt-sync")({ sigint: true });

const temperatura = 39;
const estaLloviendo = false;
const pisoDelAscensor = 10;
const horaActual = 19;
const horaApertura = 9;
const horaCierre = 22;
// ----------------- //
let deudaConMonica = 0;
const precioDelQuesoGrs = 700;
let cantQueso = prompt("Cuanto queso vas a querer comprar: ");
deudaConMonica = deudaConMonica + cantQueso * (precioDelQuesoGrs / 1000);
console.log("Le debes a monica $" + deudaConMonica);

const nombre = "Esteban";

console.log("Esteban"); // Forma 1
console.log(nombre); // Forma 2

// La mejor opcion es la segunda, porque si cambia la variable nombre

let cajonDeRemeras = "remeras";
let cajonDePantalones = "pantalones";
let cambiador = "";

cambiador = cajonDeRemeras;
cajonDeRemeras = cajonDePantalones;
cajonDePantalones = cambiador;

console.log(cajonDePantalones, cajonDeRemeras);
