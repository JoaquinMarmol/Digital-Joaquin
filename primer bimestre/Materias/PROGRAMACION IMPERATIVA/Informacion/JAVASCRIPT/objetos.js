// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

let objecto = {}; // Object Literal Sintaxis 

let miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
    return `Auto ${this.modelo} ${this.annio}`;
}
};

console.log (miAuto.detallesDelAuto()); 




