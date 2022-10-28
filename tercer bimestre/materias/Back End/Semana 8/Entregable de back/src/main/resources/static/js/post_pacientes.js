window.addEventListener('load', function () {

const Nombre = document.querySelector("#inputNombre");
const Apellido = document.querySelector("#inputApellido");
const Email = document.querySelector("#inputEmail");
const Dni = document.querySelector("#inputDni");
const Calle = document.querySelector("#inputCalle");
const Localidad = document.querySelector("#inputLocalidad");
const Numero = document.querySelector("#inputNumero");
const Provincia = document.querySelector("#inputProvincia");
const Fecha = document.querySelector("#inputFecha");
const Forms = document.querySelector("#inputForm")

      const url = '/pacientes';
      Forms.addEventListener('submit', function(e){
      e.preventDefault();
       const infoPaciente = {
            nombre: Nombre.value,
            apellido: Apellido.value,
            email: Email.value,
            dni: Dni.value,
            fecha: Fecha.value,
            domicilio:{
               calle: Calle.value,
               numero: Numero.value,
               localidad: Localidad.value,
               provincia: Provincia.value
            }
            }

            const settings = {
              method: 'POST',
              body: JSON.stringify(infoPaciente),
              headers: {"Content-Type": 'application/json'}

            }

            fetch(url,settings)
            .then(response => response.json())
            .then(data => data)

            Forms.reset();
            })


      })
