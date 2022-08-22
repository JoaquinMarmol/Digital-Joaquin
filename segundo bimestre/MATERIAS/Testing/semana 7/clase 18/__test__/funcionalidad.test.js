const fs = require('fs')
const { init } = require('../funcionalidad.js')

describe('Pruebas de 1 numero', () => {
  test('Calculadora', () => {
    document.body.innerHTML = fs.readFileSync('./calculadora.html')
    init()
    document.getElementById('uno').click()
    expect(document.getElementById('resultado').textContent).toBe('1')
  })
  test('suma de 1 + 3', () => {
    document.body.innerHTML = fs.readFileSync('./calculadora.html')
    init()
    document.getElementById('uno').click()
    document.getElementById('suma').click()
    document.getElementById('dos').click()
    document.getElementById('igual').click()
    expect(document.getElementById('resultado').textContent).toBe('3')
  })
  test('Calcula y limpiar calculadora', () => {
    document.body.innerHTML = fs.readFileSync('./calculadora.html') //
    console.log(document.body.innerHTML)
    init() // cargamos los eventos y los scripts
    document.getElementById('cinco').click() // seleccionamos el numero 5
    document.getElementById('suma').click() // seleccionamos la operacion suma
    document.getElementById('cinco').click() // seleccionamos el numero 5
    document.getElementById('igual').click() // seleccionamos el boton igual
    document.getElementById('reset').click() // seleccionamos el boton reset
    expect(document.getElementById('resultado').textContent).toBe('')
  })
})
