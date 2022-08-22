package modelo;

public class Odontologo {
    private Integer NumeroMatricula;

    private String Nombre;

    private String Apellido;

    public Odontologo(Integer numeroMatricula, String nombre, String apellido) {
        this.NumeroMatricula = numeroMatricula;
        this.Nombre = nombre;
        this.Apellido = apellido;
    }

    public Integer getNumeroMatricula() {
        return NumeroMatricula;
    }

    public void setNumeroMatricula(Integer numeroMatricula) {
        NumeroMatricula = numeroMatricula;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }
    @Override
    public String toString() {
        return "Odontologo{" +
                "Numero de matricula=" + NumeroMatricula +
                ", Nombre='" + Nombre + '\'' +
                ", Apellido='" + Apellido + '\'' +
                '}';
    }
}
