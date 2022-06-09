const contenedor = document.querySelector('.container');
const itemComponent = noticia => `
<div class="item">
<h2>${noticia.titulo}</h2>
  <img src="${noticia.imgUrl}">
  <p>
    ${noticia.descripcion}
  </p>
  <p>
  ${noticia.fecha}
  </p>
  <p>
  ${noticia.tipoNacional}
  </p>
</div>
`

noticias.forEach(noticia => {
  contenedor.innerHTML += itemComponent(noticia)
})

