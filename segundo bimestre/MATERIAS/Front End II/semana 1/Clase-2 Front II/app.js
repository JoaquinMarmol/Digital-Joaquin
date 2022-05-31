const prompt = require("prompt-sync")({ sigint: true });

//piedra papel o tijeras con switch
let pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
let usuario = pregunta.toLowerCase();
let opciones = ["piedra", "papel", "tijera"];
let maquina = opciones[Math.floor(Math.random() * 3)];
let resultado = 0;

switch(true){
    case (usuario === maquina):
        resultado = "EMPATASTE"
        break;
    case (maquina === 'piedra' && usuario === 'papel'):
        resultado = "GANASTE"
        break;
    case (maquina === 'papel'  && usuario === 'tijera'):
        resultado = "GANASTE"
        break;
    case (maquina === 'tijera' && usuario === 'piedra'):
        resultado = "GANASTE"
        break;
    default:
        resultado = "PERDISTE"       
}
console.log(resultado)
console.log("el usuario eligio "+usuario);
console.log("la maquina eligio "+maquina);