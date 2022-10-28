window.addEventListener('load', function () {
const Nombre = document.querySelector("#inputNombre");
const Apellido = document.querySelector("#inputApellido");
const Matricula = document.querySelector("#inputMatricula");
const Forms = document.querySelector("#odontoloAgregar")

      const url = '/odontologos';
      Forms.addEventListener('submit', function(e){
      e.preventDefault();
       const infoOdontologo = {
            nombre: Nombre.value,
            apellido: Apellido.value,
            matricula: Matricula.value
            }


            const settings = {
              method: 'POST',
              body: JSON.stringify(infoOdontologo),
              headers: {"Content-Type": 'application/json'}

            }

            fetch(url,settings)
            .then(response => response.json())
            .then(data => data)

            Forms.reset();
            })


      })
