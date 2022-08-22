const listadoImagenes = []

const nodosImg = document.querySelectorAll('.item img')

// metodo con eventos

// le pedimos al usuario links para nuestro listado
nodosImg.forEach(item => {
  listadoImagenes.push(prompt('ingrese un link de una imagen'))
})

nodosImg.forEach((nodo, indice) => {
  nodo.setAttribute('src', listadoImagenes[indice])
  //   evento click en la imagen
  nodo.addEventListener('click', () => {
    window.location = listadoImagenes[indice]
  })
})

// metodo con manejo de nodos

const itemList = document.querySelectorAll('.item')

itemList.forEach(item => {
  listadoImagenes.push(prompt('ingrese un link de una imagen'))
})

itemList.forEach((item, indice) => {
  //   creamos el a
  const a = document.createElement('a')
  a.setAttribute('href', listadoImagenes[indice])
  //   creamos la imagen
  const img = document.createElement('img')
  img.src = listadoImagenes[indice]
  img.setAttribute('alt', `imagen ${indice + 1}`)
  //   metemos la img en el a
  a.appendChild(img)
  //   metemos el a que tiene la imagen en el a
  item.appendChild(a)
})
