const prompt = require("prompt-sync")({ sigint: true });

//piedra papel o tijeras con switch
let pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
let user = pregunta.toLowerCase();
let options = ["piedra", "papel", "tijera"];
let machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}


// otro ejemplo
let dia = 'jueves'
function finDeSemana (dia) {	
switch (dia) {	
	case 'viernes':
    	console.log('buen finde');
		break;
	
	case 'lunes':
    	console.log('buena semana');
		break;

	default:
    	console.log('buen dia');
		break;
	
}
}