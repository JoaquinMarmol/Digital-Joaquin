const prompt = require("prompt-sync")({ sigint: true });
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  let autos = [];
  for(let i = 0 ; i < 3 ; i++){
    let marca = prompt("Ingresa la marca del auto");
    let modelo = prompt("Ingresa el modelo del auto");
    let annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }