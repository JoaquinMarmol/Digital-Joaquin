package com.example.clase22.servicio;

import com.example.clase22.dto.TurnoDTO;
import com.example.clase22.entities.Domicilio;
import com.example.clase22.entities.Odontologo;
import com.example.clase22.entities.Paciente;
import com.example.clase22.entities.Turno;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
class TurnoServiceTest {
    //necesito crear un paciente y un ondontologo
    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private OdontologoService odontologoService;
    @Autowired
    private TurnoService turnoService;

    public void precargarDatos(){
        //me voy encargar de preparar un paciente y un odontologo
        Domicilio domicilio = new Domicilio();
        domicilio.setCalle("Calle x");
        domicilio.setNumero(584);
        domicilio.setLocalidad("Salta");
        domicilio.setProvincia("Salta");
        Paciente paciente= new Paciente();
        paciente.setNombre("Rodolfo");
        paciente.setApellido("Baspineiro");
        paciente.setDomicilio(domicilio);
        pacienteService.guardar(paciente);

        Odontologo odontologo=new Odontologo();
        odontologo.setNombre("Colmillo");
        odontologo.setApellido("Cariado");
        odontologoService.guardarOdontologo(odontologo);
    }

    @Test
    @Order(1)
    void guardar() {
        precargarDatos();
        //preparar un turno para su guardado
        TurnoDTO turno= new TurnoDTO();
        turno.setFecha(LocalDate.of(2022,9,19));
        turno.setOdontologo_id(1L);
        turno.setPaciente_id(1L);
        TurnoDTO turnoGuardado=turnoService.guardar(turno);
        assertEquals(1,turnoGuardado.getId());
    }

    @Test
    @Order(2)
    void buscar() {
        Optional<TurnoDTO> turnoBuscado=turnoService.buscar(1L);
        TurnoDTO turnoBuscadoFinal=turnoBuscado.get();
        assertNotNull(turnoBuscadoFinal);
    }

    @Test
    @Order(3)
    void buscarTodos() {
    }

    @Test
    @Order(4)
    void actualizarTurno() {
    }

    @Test
    @Order(5)
    void eliminarTurno() {
    }
}