window.addEventListener('load', function () {
const Odontologo = document.querySelector("#inputOdontologo");
const Paciente = document.querySelector("#inputPaciente");
const Fecha = document.querySelector("#inputFecha");
const Forms = document.querySelector("#turnoForm")

      const url = '/turnos';
      Forms.addEventListener('submit', function(e){
      e.preventDefault();
       const infoTurnos = {
            odontologo_id: Odontologo.value,
            paciente_id: Paciente.value,
            fecha: Fecha.value
            }


            const settings = {
              method: 'POST',
              body: JSON.stringify(infoTurnos),
              headers: {"Content-Type": 'application/json'}

            }

            fetch(url,settings)
            .then(response => response.json())
            .then(data => data)

            Forms.reset();
            })


      })
