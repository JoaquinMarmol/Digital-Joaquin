package dao;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.DriverManager;

public class BD {
    private static final String DRIVER="org.h2.Driver";
    private static final String URL="jdbc:h2:~/sa";
    private static final String USER="sa";
    private static final String PASS="sa";

    private static final String SQL_CREATE_TABLE=
            "DROP TABLE IF EXISTS ODONTOLOGOS;" +
                    "CREATE TABLE ODONTOLOGOS (NUMEROMATRICULA INT AUTO_INCREMENT PRIMARY KEY," +
                    "NOMBRE VARCHAR(100)," +
                    "APELLIDO VARCHAR(100))";

    public static void crearBD2() throws Exception {
        Connection connection=getConnection();
        Statement statement=connection.createStatement();
        statement.execute(SQL_CREATE_TABLE);
    }
    public static Connection getConnection() throws Exception{
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL,USER,PASS);
    }
}
