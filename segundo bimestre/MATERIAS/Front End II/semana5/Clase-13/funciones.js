const listado = [
    'Email no válido o incorrecto.',
    'Contraseña no válida o incorrecta.',
    'Es necesario aceptar los términos y condiciones.',
    'Este es nuevo'
]

// const listadoHtml = listado.map(  item => {
//     return `<p><small>${item}</small></p>`
// });

// const listadoModificado = []
const errores = document.querySelector('.errores');

// errores.innerHTML = listadoHtml.join('')

errores.innerHTML = listado.filter(item => item.length > 15).map( item => `<p><small>${item}</small></p>`).join('');

setTimeout(function(){
    alert("pasaron 5 segundos")
}, 5000)