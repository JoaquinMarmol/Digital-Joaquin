window.addEventListener('load', function () {
    (function(){


      const url = '/pacientes';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
  console.log(data);

         for(paciente of data){

            let table = document.getElementById("pacienteTable");
            let pacienteRow =table.insertRow();
            let tr_id = 'tr_' + paciente.id;
            pacienteRow.id = tr_id;


            pacienteRow.innerHTML =
                    '<td class=\"td_id\">' + paciente.id + '</td>' +
                    '<td class=\"td_apellido\">' + paciente.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_nombre\">' + paciente.nombre.toUpperCase() + '</td>'+
                    '<td class=\"td_email\">' + paciente.email.toUpperCase() + '</td>'+
                    '<td class=\"td_dni\">' + paciente.dni + '</td>'+
                    '<td class=\"td_calle\">' + paciente.domicilio.calle.toUpperCase() + '</td>'+
                    '<td class=\"td_numero\">' + paciente.domicilio.numero + '</td>'+
                    '<td class=\"td_localidad\">' + paciente.domicilio.localidad.toUpperCase() + '</td>'+
                    '<td class=\"td_provincia\">' + paciente.domicilio.provincia.toUpperCase() + '</td>'+
                    '<td class=\"td_fecha\">' + paciente.fecha + '</td>'
        };
    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/pacientesList.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })


    })