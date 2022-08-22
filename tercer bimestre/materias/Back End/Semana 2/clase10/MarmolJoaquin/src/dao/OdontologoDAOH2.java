package dao;

import modelo.Odontologo;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class OdontologoDAOH2 implements IDao<Odontologo> {
    private static final String SQL_INSERT = "INSERT INTO ODONTOLOGOS (" +
            "NUMEROMATRICULA, NOMBRE, APELLIDO) VALUES (?,?,?)";

    private static final String SQL_SELECT =
            "SELECT * FROM ODONTOLOGOS WHERE NUMEROMATRICULA=?";

    private static final String SQL_SELECT_TODOS =
            "SELECT * FROM ODONTOLOGOS ";
    private static final Logger logger = Logger.getLogger(OdontologoDAOH2.class);
    @Override
    public Odontologo guardar(Odontologo odontologo) {
        logger.info("Registrando un nuevo odontologo: "+odontologo);
        Connection connection=null;
        try{
            connection=BD.getConnection();
            PreparedStatement ps= connection.prepareStatement(SQL_INSERT, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1,odontologo.getNumeroMatricula());
            ps.setString(2,odontologo.getNombre());
            ps.setString(3,odontologo.getApellido());


            ps.executeUpdate();
            ResultSet claveGenerada=ps.getGeneratedKeys();
            while (claveGenerada.next()){
                odontologo.setNumeroMatricula(claveGenerada.getInt(1));
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
        logger.info("El odontologo se registro con exito: "+odontologo.toString());
        return odontologo;
    }


    @Override
    public Odontologo buscar(Integer numeroMatricula) {
        logger.info("Buscando al odontologo con numero de matricula: " + numeroMatricula);
        Connection connection = null;
        Odontologo odontologo = null;

        try {
            connection = BD.getConnection();
            PreparedStatement ps = connection.prepareStatement(SQL_SELECT);
            ps.setInt(1, numeroMatricula);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Integer idMatricula = rs.getInt(1);
                String nombre = rs.getString(2);
                String apellido= rs.getString(3);
                odontologo = new Odontologo(idMatricula,nombre,apellido);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("El odontologo con matricula " +odontologo.getNumeroMatricula()+ " es " + odontologo.getNombre()+" "+odontologo.getApellido());
        return odontologo;
    }

    @Override
    public List<Odontologo> buscarTodos() {
        logger.info("Buscando todos los odontologos");
        Connection connection = null;
        List<Odontologo> pacientes = new ArrayList<>();

        try {
            // levantar el driver y conectarnos
            connection = BD.getConnection();
            // creamos una sentencia
            PreparedStatement ps = connection.prepareStatement(SQL_SELECT_TODOS);
            //ejecutamos la sentencia
            ResultSet rs = ps.executeQuery();
            // evaluamos los resultados
            while (rs.next()) {
                Integer numeroMatricula = rs.getInt(1);
                String nombre =  rs.getString(2);
                String apellido=      rs.getString(3);

                Odontologo odontologo = new Odontologo(numeroMatricula,nombre,apellido);
                pacientes.add(odontologo);
                logger.info("Se encotro al odontologo: " + odontologo.getNombre() +" "+odontologo.getApellido());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return pacientes;
    }

}

