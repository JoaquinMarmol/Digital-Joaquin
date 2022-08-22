package mesas.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class BD {

        private static final String DRIVER="org.h2.Driver";
        private static final String URL="jdbc:h2:~/sa";
        private static final String USER="sa";
        private static final String PASS="sa";

        private static final String SQL_CREATE_TABLE=
                "DROP TABLE IF EXISTS PACIENTES;" +
                        "CREATE TABLE PACIENTES (ID INT AUTO_INCREMENT PRIMARY KEY," +
                        "NOMBRE VARCHAR(100)," +
                        "APELLIDO VARCHAR(100)," +
                        "DNI INT," +
                        "FECHADEINGRESO INT,"+
                        "DOMICILIO VARCHAR (100))";

        private static final String SQL_CREATE_TABLE2=
            "DROP TABLE IF EXISTS DOMICILIO;" +
                    "CREATE TABLE DOMICILIO (ID INT AUTO_INCREMENT PRIMARY KEY," +
                    "CALLE VARCHAR(100)," +
                    "NUMERO VARCHAR(100)," +
                    "LOCALIDAD VARCHAR(100)," +
                    "PROVINCIA VARCHAR(100))";

        public static void crearBD2() throws Exception {
            Connection connection=getConnection();
            Statement statement=connection.createStatement();
            statement.execute(SQL_CREATE_TABLE);
        }
        public static void crearBD3() throws Exception {
        Connection connection=getConnection();
        Statement statement=connection.createStatement();
        statement.execute(SQL_CREATE_TABLE2);
    }
        public static Connection getConnection() throws Exception{
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL,USER,PASS);
        }
    }

