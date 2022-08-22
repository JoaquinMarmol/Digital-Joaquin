package mesas;

import org.apache.log4j.Logger;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
public class Main {
        private static final String SQL_CREATE_TABLE=
                "DROP TABLE IF EXISTS EMPLEADOS;"
                        +"CREATE TABLE EMPLEADOS ("
                        +"ID INT PRIMARY KEY, "
                        +"PRIMER_NOMBRE VARCHAR(100) NOT NULL, "
                        +"APELLIDO VARCHAR(100) NOT NULL, "
                        +"EDAD INT NOT NULL, "
                        +"EMAIL VARCHAR(100) NOT NULL)";
        private static final String SQL_INSERT1=
                "INSERT INTO EMPLEADOS (ID,PRIMER_NOMBRE,APELLIDO,EDAD,EMAIL) VALUES"
                        + " (1,'Rodolfo','Baspineiro',29, 'baspinerorodolfo@gmail.com')";
        private static final String SQL_INSERT2=
                "INSERT INTO EMPLEADOS (ID,PRIMER_NOMBRE,APELLIDO,EDAD, EMAIL) VALUES"
                        + " (2,'Pedro','López',45, 'PEDROLOPEZ@GMAIL.COM')";
        private static final String SQL_INSERT3=
                "INSERT INTO EMPLEADOS (ID,PRIMER_NOMBRE,APELLIDO,EDAD, EMAIL) VALUES"
                        + " (3,'Pablo','Martini',67, 'PABLOMARTINI@GMAIL.COM')";

        private static final String SQL_INSERT4=
            "INSERT INTO EMPLEADOS (ID,PRIMER_NOMBRE,APELLIDO,EDAD, EMAIL) VALUES"
                    + " (4,'Pablo','Del Litto',21, 'PABLODELLITTO@GMAIL.COM')";

        private static final String SQL_INSERT5=
            "INSERT INTO EMPLEADOS (ID,PRIMER_NOMBRE,APELLIDO,EDAD, EMAIL) VALUES"
                    + " (5,'Nachoo','Moscardin',19, 'NACHOMOSCARDO@GMAIL.COM')";

        private static final String SQL_SELECT="SELECT * FROM EMPLEADOS";

        private static final String SQL_UPDATE="UPDATE EMPLEADOS SET APELLIDO='MOSCA' WHERE ID=5";

        private static final String SQL_DELETE="DELETE FROM EMPLEADOS WHERE ID=3";
        private static final String SQL_DELETE_EDAD="DELETE FROM EMPLEADOS WHERE EDAD=29";

        private static final String SQL_SELECT2="SELECT * FROM EMPLEADOS";


        private static final Logger logger= Logger.getLogger(presencial.Main.class);



        public static void main(String[] args) {
            //esta to do lo que se ejecuta
            Connection connection=null;
            try{
                connection=getConnection();
                Statement statement= connection.createStatement();
                //crear la tabla
                statement.execute(SQL_CREATE_TABLE);
                //inserto tres elementos
                statement.execute(SQL_INSERT1);
                statement.execute(SQL_INSERT2);
                statement.execute(SQL_INSERT3);
                statement.execute(SQL_INSERT4);
                statement.execute(SQL_INSERT5);
                statement.execute(SQL_UPDATE);
                statement.execute(SQL_DELETE);
                statement.execute(SQL_DELETE_EDAD);

                //mostrar los datos de la BD
                ResultSet rs=statement.executeQuery(SQL_SELECT);
                while (rs.next()){
                    System.out.println("ID: "+rs.getInt(1)+" -Primer nombre: "+
                            rs.getString(2)+" -Apellido: "+rs.getString(3)+
                            " -Edad: "+rs.getInt(4)+" -Email: "+rs.getString(5));
                }
                ResultSet res=statement.executeQuery(SQL_SELECT);
                while (res.next()){
                    logger.debug("Se actualizo la información del empleado: \n" + "ID: "
                            + res.getInt(1) + "\nNombre: " + res.getString(2) + "\nApellido: "
                            + res.getString(3) + "\nEdad: " + res.getInt(4) + "\nEmail: " + res.getString(5));
                }
                logger.info("Se elimino el empleado por su id, con la siguiente informacion: "+ SQL_INSERT3 +"");
                logger.info("Se elimino el empleado por su apellido, con la siguiente informacion: "+ SQL_INSERT1 +"");


            }
            catch (Exception exception){
                logger.error(exception.getMessage());
                exception.printStackTrace();
            }

        }







        public static Connection getConnection() throws Exception{
            //indicar el driver y retornar el getconnection del DriverManager
            Class.forName("org.h2.Driver");
            return DriverManager.getConnection(
                    "jdbc:h2:~/clase12",
                    "sa",
                    "sa");
        }
    }


