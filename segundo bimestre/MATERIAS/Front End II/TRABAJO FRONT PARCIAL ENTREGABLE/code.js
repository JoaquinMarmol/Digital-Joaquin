/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */


function obtenerDatosDelUsuario(){
  /*--------------- PUNTO1:Escribe tu codigoapartir de aqui*/
   datosPersona.nombre = prompt ("Ingresa tu nombre");
   datosPersona.edad = 2022 - prompt ("Ingrese el año en que naciste");
   datosPersona.ciudad = prompt ("Ingresa la ciudad donde vives");
   datosPersona.interesPorJs = confirm ("¿Te interesa JavaScript? SI = Aceptar | NO = Cancelar");
}

 function renderizarDatosUsuario(){
   /*----- --------- NO TOCAR NI ELIMINAR ESTA FUNCION."*/
   obtenerDatosDelUsuario();
  /*------ PUNTO2:Escribe tu codigoapartir de aqui*/
   nombre.innerHTML = datosPersona.nombre;
   edad.innerHTML = datosPersona.edad;
   ciudad.innerHTML = datosPersona.ciudad;
   if(datosPersona.interesPorJs){
     javascript.innerHTML="Si"
   }else{
     javascript.innerHTML="No"
  }
}
 
  const fila = document.querySelector('#fila');
  let elemento = true;

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  if(elemento){
    listado.forEach(item=>
      fila.innerHTML += `              
    <div class = "caja">
      <img src = ${item.imgUrl} alt="lenguajes">
      <p class = "lenguajes"> ${item.lenguajes}</p>
      <p class = "bimestre"> ${item.bimestre}</p>
    </div>`);
    elemento = !elemento;
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio.classList.toggle("dark");
}

/*--------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const sobreMi = document.querySelector('#sobre-mi');

window.addEventListener("keypress",function(e){
 if (e.key === "f"){
   sobreMi.classList.remove('oculto');
 }
}); 