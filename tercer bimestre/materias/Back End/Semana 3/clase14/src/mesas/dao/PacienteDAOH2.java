package mesas.dao;

import mesas.modelo.Paciente;
import org.apache.log4j.Logger;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class PacienteDAOH2 implements IDao<Paciente> {
    private static final String SQL_INSERT = "INSERT INTO PACIENTES (" +
            "NOMBRE, APELLIDO, DNI, FECHADEINGRESO, DOMICILIO) VALUES (?,?,?,?,?)";
    private static final String SQL_DELETE =
            "DELETE FROM PACIENTES WHERE ID=?";

    private static final String SQL_SELECT =
            "SELECT * FROM PACIENTES WHERE ID=?";
    private static final String SQL_SELECT_TODOS =
            "SELECT * FROM PACIENTES ";
    private static final String SQL_UPDATE =
            "UPDATE PACIENTES SET NOMBRE= ? WHERE ID= ?";
    private static final Logger logger = Logger.getLogger(PacienteDAOH2.class);

    public Paciente guardar(Paciente paciente) {
        //conectarnos a la base y guardar el medicamento
        //logger iniciando el guardado del medicamento nombre.
        logger.info("Registrando un pedido de nuevo"+paciente);
        Connection connection=null;
        try{
            connection=BD.getConnection();
            PreparedStatement ps= connection.prepareStatement(SQL_INSERT, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1,paciente.getNombre());
            ps.setString(2,paciente.getApellido());
            ps.setInt(3,paciente.getDNI());
            ps.setInt(4,paciente.getFechaIngreso());
            ps.setString(5,paciente.getDomicilio());
            ps.executeUpdate();
            //procesar la clave autogenerada
            ResultSet claveGenerada=ps.getGeneratedKeys();
            while (claveGenerada.next()){
                paciente.setID(claveGenerada.getInt(1));
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
        logger.info("El paciente se registró con éxito:"+paciente.toString());
        return paciente;
     }
    @Override
    public Paciente buscar(Integer id) {
        //logger
        logger.info("Buscando al paciente con id:" + id);
        Connection connection = null;
        Paciente paciente = null;

        try {
            // levantar el driver y conectarnos
            connection = BD.getConnection();
            // creamos una sentencia
            PreparedStatement ps = connection.prepareStatement(SQL_SELECT);
            ps.setInt(1, id);
            //ejecutamos la sentencia
            ResultSet rs = ps.executeQuery();
            // evaluamos los resultados
            while (rs.next()) {
                  Integer idPaciente = rs.getInt(1);
                  String nombre =  rs.getString(2);
                  String apellido=      rs.getString(3);
                  Integer DNI =      rs.getInt(4);
                  Integer fechaIngreso= rs.getInt(5);
                  String domicilio = rs.getString(6);
                  paciente = new Paciente(idPaciente,nombre,apellido,DNI,fechaIngreso,domicilio);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("El paciente se encontró, esta es su información:" + paciente.toString());
        return paciente;
    }

    @Override
    public List<Paciente> buscarTodos() {
        //logger
        logger.info("Buscando todos los pacientes");
        Connection connection = null;
        List<Paciente> pacientes = new ArrayList<>();

        try {
            // levantar el driver y conectarnos
            connection = BD.getConnection();
            // creamos una sentencia
            PreparedStatement ps = connection.prepareStatement(SQL_SELECT_TODOS);
            //ejecutamos la sentencia
            ResultSet rs = ps.executeQuery();
            // evaluamos los resultados
            while (rs.next()) {
                Integer idPaciente = rs.getInt(1);
                String nombre =  rs.getString(2);
                String apellido=      rs.getString(3);
                Integer DNI =      rs.getInt(4);
                Integer fechaIngreso= rs.getInt(5);
                String domicilio = rs.getString(6);
                Paciente paciente = new Paciente(idPaciente,nombre,apellido,DNI,fechaIngreso,domicilio);
                pacientes.add(paciente);
                logger.info("Se encotraron todos los pacientes: " + paciente.getNombre());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return pacientes;
    }
    @Override
    public Paciente modificar(Paciente paciente) {
        //logger
        logger.info("Se modifico la informacion del paciente con id:" + paciente.toString());
        Connection connection = null;
        try {
            connection = BD.getConnection();
            PreparedStatement ps = connection.prepareStatement(SQL_UPDATE);
            ps.setString(1, paciente.getNombre());
            ps.setString(2, paciente.getApellido());
            ps.setInt(3, paciente.getDNI());
            ps.setInt(4, paciente.getFechaIngreso());
            ps.setString(5, paciente.getDomicilio());
            ps.setInt(6, paciente.getID());
            ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("Se ha modificado la informacion del paciente, su nueva información es:" + paciente.toString());
        return paciente;
    }
    @Override

    public void eliminar(Integer id) {
        //logger
        logger.info("Borrando al paciente con id:" + id);
        Connection connection = null;
        try {
            connection = BD.getConnection();
            PreparedStatement ps = connection.prepareStatement(SQL_DELETE);
            ps.setInt(1, id);
            ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("El paciente se elimino correctamente");
    }

}
