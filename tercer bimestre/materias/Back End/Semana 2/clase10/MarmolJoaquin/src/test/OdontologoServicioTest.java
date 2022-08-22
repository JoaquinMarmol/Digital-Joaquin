package test;

import dao.OdontologoDAOH2;
import modelo.Odontologo;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;
import dao.BD;
import servicios.OdontologoServicio;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class OdontologoServicioTest {

    Odontologo odontologo1 = new Odontologo(1, "Javier", "Lopez");
    Odontologo odontologo2 = new Odontologo(2, "Joaquin","Fernandez");
    Odontologo odontologo3 = new Odontologo(3, "Pedro", "Juarez");
    Odontologo odontologo4 = new Odontologo(4, "Rodolfo", "Baspiniero");

    Logger logger = Logger.getLogger(OdontologoServicioTest.class);

    OdontologoServicio odontologoService = new OdontologoServicio(new OdontologoDAOH2());
    List<Odontologo> odontologo= new ArrayList<>();
    @Test
    void guardarTest() throws Exception {
        BD.crearBD2();
        odontologoService.guardar(odontologo1);
        odontologoService.guardar(odontologo2);
        odontologoService.guardar(odontologo3);
        odontologoService.guardar(odontologo4);
        assertTrue(odontologo2.getNumeroMatricula()==2);
    }

    @Test
    void buscarXId() throws Exception {
        BD.getConnection();
        odontologoService.buscar(1);
        assertTrue(odontologo1.getNombre().equals("Javier"));

    }
    @Test
    void buscarTodos() throws Exception {
        BD.getConnection();
        odontologo.add(odontologo1);
        odontologo.add(odontologo2);
        odontologo.add(odontologo3);
        odontologo.add(odontologo4);
        odontologoService.buscarTodos();
        assertTrue(odontologo.size()==4);
    }

}