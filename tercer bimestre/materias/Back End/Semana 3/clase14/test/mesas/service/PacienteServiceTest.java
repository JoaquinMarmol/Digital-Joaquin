package mesas.service;

import mesas.dao.PacienteDAOH2;
import mesas.modelo.Paciente;
import org.junit.jupiter.api.Test;
import mesas.dao.BD;


import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


public class PacienteServiceTest {


    Paciente paciente = new Paciente("Juan Pablo","Perez",61274487,07710,"Necochea");
    Paciente paciente2 = new Paciente("Juan Martin","Perez",61274487,07710,"Rada Tilly");
    Paciente pacienteBorrado= new Paciente("Lionel","Messi",61274487,07710,"Rada Tilly");
    PacienteService pacienteService = new PacienteService(new PacienteDAOH2());
    List<Paciente> pacientes= new ArrayList<>();
    @Test
    void guardarTest() throws Exception {
        BD.crearBD2();
            pacienteService.guardar(paciente);
            pacienteService.guardar(paciente2);
            pacienteService.guardar(pacienteBorrado);
            assertTrue(paciente2.getID()==2);
        }

    @Test
    void buscarXId() throws Exception {
        BD.getConnection();
        pacienteService.buscarXId(1);
        assertTrue(paciente.getNombre().equals("Juan Pablo"));

    }
    @Test
    void buscarTodos() throws Exception {
        BD.getConnection();
        pacientes.add(paciente);
        pacientes.add(paciente2);
        pacientes.add(pacienteBorrado);
        pacienteService.buscarTodos();
        assertTrue(pacientes.size()==3);
    }
    @Test
    void modificar() throws Exception {
        BD.getConnection();
        paciente2.setNombre("Serafin");
        paciente2.setApellido("Quesada");
        pacienteService.modificar(paciente2);
        assertTrue(paciente2.getNombre().equals("Serafin"));
    }

    @Test
    void eliminar() throws Exception {
        BD.getConnection();
        pacienteService.eliminar(2);
        assertEquals(null,pacienteBorrado.getID());
    }
}
