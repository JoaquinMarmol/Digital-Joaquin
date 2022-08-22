
import jdk.swing.interop.SwingInterOpUtils;

import java.sql.*;
public class Main {

    private static final String SQL_CREATE_TABLE = "DROP TABLE IF EXISTS FIGURAS; CREATE TABLE" +
            " FIGURAS ("
            + " ID INT PRIMARY KEY,"
            + " TIPO VARCHAR(100) NOT NULL,"
            + " COLOR VARCHAR(100) NOT NULL)";
    private static final String SQL_INSERT_1 = "INSERT INTO FIGURAS (ID, TIPO, COLOR) VALUES " +
            "(1,'CUADRADO', 'ROJO')";
    private static final String SQL_INSERT_2 = "INSERT INTO FIGURAS (ID, TIPO, COLOR) VALUES " +
            "(2,'CUADRADO', 'AZUL')";
    private static final String SQL_INSERT_3 = "INSERT INTO FIGURAS (ID, TIPO, COLOR) VALUES " +
            "(3,'CUADRADO', 'AMARILLO')";
    private static final String SQL_INSERT_4 = "INSERT INTO FIGURAS (ID, TIPO, COLOR) VALUES " +
            "(4,'CIRCULO', 'ROJO')";
    private static final String SQL_INSERT_5 = "INSERT INTO FIGURAS (ID, TIPO, COLOR) VALUES " +
            "(5,'CIRCULO', 'AZUL')";

    private static final String SQLSELECT = "SELECT * FROM FIGURAS WHERE COLOR = 'ROJO'";

    private static final String SQL_SELECT = "SELECT * FROM FIGURAS";

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        Class.forName("org.h2.Driver");
        Connection connection = DriverManager.getConnection(
                "jdbc:h2:~/CLASE11MESAS", "joaquin", "joaquin");
        Statement statement = connection.createStatement();
        statement.execute(SQL_CREATE_TABLE);
        statement.execute(SQL_INSERT_1);
        statement.execute(SQL_INSERT_2);
        statement.execute(SQL_INSERT_3);
        statement.execute(SQL_INSERT_4);
        statement.execute(SQL_INSERT_5);
        ResultSet rs = statement.executeQuery(SQL_SELECT);
        while (rs.next()) {
            System.out.println(rs.getInt(1) + "-" + rs.getString(2) + "-" +
                   rs.getString(3));
        }
        ResultSet res = statement.executeQuery(SQLSELECT);
        while (res.next()) {
            System.out.println("LOS ROJOS:" + res.getInt(1) + "-" + res.getString(2) + "-" + res.getString(3));
        }
    }
}