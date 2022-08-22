const validacion = (a, b) => {
    return isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number'
}

function suma (a, b) {
    if (validacion(a, b)) return 0 
    return a + b
  }
  
  function resta (a, b) {
    if (validacion(a, b)) return 0 
    return a - b
  }
  function division (a, b) {
    if (validacion(a, b)) return 0 
    return a / b
  }
  
  function multiplicacion (a, b) {
    if (validacion(a, b)) return 0 
    return a * b
  }
  
  module.exports = {
    suma,
    resta,
    division,
    multiplicacion
  }
  