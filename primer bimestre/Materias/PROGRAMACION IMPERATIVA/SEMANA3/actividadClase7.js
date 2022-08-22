let edad = 21 
function entradaDiscoteca (edad) {
if(edad < 0) {
console.log("Error, edad invalida. Porfavor ingrese un numero valido.")
} else if (edad < 18){
console.log("No puede pasar al bar.")
} else if (edad < 21 ) {
console.log("Puede pasar al bar pero no puede tomar alcohol.")
} else if (edad == 21) {
console.log("Puede pasar al bar y tomar alcohol, y felicitaciones por la mayoria de edad.")    
} else {
console.log("Puede pasar al bar y tomar alcohol.")   
}
}
function edadImpar (edad) {
    if (edad % 2 == 1) {
    console.log("Sabias que tu edad es impar?.")
    }
}
console.log (entradaDiscoteca(edad))
console.log (edadImpar(edad))

function totalAPagar (vehiculos, litrosConsumidos) {
    if (vehiculos === "coche" && litrosConsumidos > 25) {
        return (86 * litrosConsumidos) + 25
    }
    else if (vehiculos === "coche" && litrosConsumidos <= 25) {
        return (86 * litrosConsumidos) + 50
    }
    else if (vehiculos === "moto" && litrosConsumidos > 25) {
        return (70 * litrosConsumidos) + 25
    }
    else if (vehiculos === "moto" && litrosConsumidos <= 25) {
        return (70 * litrosConsumidos) + 50
    }
    if (vehiculos === "autobus" && litrosConsumidos > 25) {
        return (55 * litrosConsumidos) + 25
    }
    else if (vehiculos === "autobus" && litrosConsumidos <= 25) {
        return (55 * litrosConsumidos) + 50
    }

}
console.log (totalAPagar("coche", 30))

let sanwichBase = 0
function localDeSanwich (base, tipoPan, a1, a2, a3, a4, a5, a6) {
      if (base === "pollo") {
          sanwichBase = sanwichBase + 150
      }
      else if (base === "carne") {
          sanwichBase = sanwichBase + 200
      }
      else if (base === "vegetariano") {
          sanwichBase = sanwichBase + 100
      }
      else if (tipoPan === "blanco") {
          sanwichBase = sanwichBase + 50
      }
      else if (tipoPan === "negro") {
          sanwichBase = sanwichBase + 60
      }
      else if (tipoPan === "sinGluten") {
          sanwichBase = sanwichBase + 75
      }
      else if (a1 == true) {
          sanwichBase = sanwichBase + 20
      }
      else if (a2 == true) {
        sanwichBase = sanwichBase + 15
      }
      else if (a3 == true) {
        sanwichBase = sanwichBase + 10
      }
      else if (a4 == true) {
        sanwichBase = sanwichBase + 15
      }
      else if (a5 == true) {
        sanwichBase = sanwichBase + 5
      }
      else if (a6 == true) {
        sanwichBase = sanwichBase + 5
      }
}
console.log (localDeSanwich ("pollo", "blanco", true, false, true, true, false, true))