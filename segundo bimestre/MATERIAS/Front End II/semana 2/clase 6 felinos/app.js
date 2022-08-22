const container = document.querySelector('.contenedor')

// solucion react
const itemComponent = item => `
<div class="item">
  <img src="${item.imgUrl}">
  <h2>${item.title}</h2>
  <p>
    ${item.description}
  </p>
</div>
`

listadoFelinos.forEach(felino => {
  container.innerHTML += itemComponent(felino)
})

// -------------- forma ultramegaoptimizada ----------

container.innerHTML = listadoFelinos
  .map(felino => itemComponent(felino))
  .join('')

// ---------- forma nefasta -------------

function createFelineItem (feline) {
  // create item
  const item = document.createElement('DIV')
  item.classList.add('item')
  // img
  const img = document.createElement('IMG')
  img.src = feline.imgUrl
  item.appendChild(img)
  // h2
  const h2 = document.createElement('H2')
  h2.textContent = item.title
  item.appendChild(h2)
  // p
  const p = document.createElement('P')
  p.textContent = feline.description
  item.appendChild(p)
  // add to dom
  container.appendChild(item)
}

listadoFelinos.forEach(feline => {
  createFelineItem(feline)
})