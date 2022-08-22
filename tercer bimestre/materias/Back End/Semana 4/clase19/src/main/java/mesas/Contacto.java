package mesas;
import java.io.Serializable;

public class Contacto implements Serializable{
    private String Nombre;
    private String Mail;
    private Integer Telefono;

    public Contacto(String nombre, String mail, Integer telefono) {
        Nombre = nombre;
        Mail = mail;
        Telefono = telefono;
    }

    @Override
    public String toString() {
        return "Contacto{" +
                "Nombre='" + Nombre + '\'' +
                ", Mail='" + Mail + '\'' +
                ", Telefono=" + Telefono +
                '}';
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getMail() {
        return Mail;
    }

    public void setMail(String mail) {
        Mail = mail;
    }

    public Integer getTelefono() {
        return Telefono;
    }

    public void setTelefono(Integer telefono) {
        Telefono = telefono;
    }
}

