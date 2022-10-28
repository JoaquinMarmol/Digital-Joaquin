window.addEventListener('load', function () {
    (function(){


      const url = '/turnos';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {


         for(turno of data){

            let table = document.getElementById("turnoTableBody");
            let turnoRow =table.insertRow();
            let tr_id = 'tr_' + turno.id;
            turnoRow.id = tr_id;


            turnoRow.innerHTML =
                    '<td class=\"td_id\">' + turno.id + '</td>' +
                    '<td class=\"td_odontologo\">' + turno.odontologo_id + '</td>' +
                    '<td class=\"td_paciente\">' + turno.paciente_id + '</td>' +
                    '<td class=\"td_fecha\">' + turno.fecha + '</td>';

    }
    })
 })
    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/turnosList.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })
    })