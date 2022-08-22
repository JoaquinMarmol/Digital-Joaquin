//El alcance (scope) de una variable puede ser:
//1- Global:ss
var miNombre = "Joaquin";

//2- Local:
function nombre(){
    var miApellido = "Marmol";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Joaquin Marmol"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.
