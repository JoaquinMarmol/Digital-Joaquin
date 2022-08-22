## clase 18

instalamos Jest y jest dom enviroment

```bash

npm init -y
npm i jest jest-environment-jsdom

```

### Modificamos el archivo package.json

```bash

"scripts": {
    "test": "jest --env=jsdom"
  }

```

### creamos la carpeta test y el archivo funcionalidad.test.js

```js
const fs = require('fs')
const { init } = require('../funcionalidad.js')
```

importamos fs y la funcion init del script funcionalidad.js

```js
document.body.innerHTML = fs.readFileSync('./calculadora.html') // leemos el html y lo asignamos al body
init() // ejecutamos la funcion init, para que cargue los eventos de la calculadora
```

ahora en este momento de la ejecucion del test, tenemos un entorno identico a cuando abrimos el navegador, con el html y la calculadora cargada.
Pero abstraido en un entorno de jest

Para probar las funcionalidades de la calculadora debemos valernos de lo que sabemos de javascript y manejo de nodos

```js
test('suma de 1 + 3', () => {
  document.body.innerHTML = fs.readFileSync('./calculadora.html')
  init()
  document.getElementById('uno').click()
  document.getElementById('suma').click()
  document.getElementById('dos').click()
  document.getElementById('igual').click()
  expect(document.getElementById('resultado').textContent).toBe('3')
})
```

Cuando se ejecuta el test y se inicia el entorno, seleccionamos los elementos del dom como sabemos y ejecutamos la funcion click() para simular un click en el elemento.

luego para veridficar que funcione de manera correctra vemos si el contenido de resultado sea el correcto.

---

espero les sirva

**Fabrizio Signoretta**
