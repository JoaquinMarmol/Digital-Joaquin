const modoOscuro = document.querySelector("body");
modoOscuro.classList.toggle("colorFondo");
const tituloOscuro = document.querySelector("h1");
tituloOscuro.classList.toggle("tituloFamilia");
const itemModificados = document.querySelectorAll("div.item");
itemModificados.forEach(item => item.classList.toggle("modificandoItems"));
