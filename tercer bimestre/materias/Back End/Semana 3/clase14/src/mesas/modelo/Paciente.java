package mesas.modelo;

public class Paciente {

    private Integer ID;
    private String Nombre;
    private String Apellido;
    private Integer DNI;
    private Integer FechaIngreso;
    private String Domicilio;

    public Paciente(Integer ID, String nombre, String apellido, Integer DNI, Integer fechaIngreso,String domicilio) {
        this.ID = ID;
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.DNI = DNI;
        this.FechaIngreso = fechaIngreso;
        this.Domicilio = domicilio;
    }
    public Paciente(String nombre,String apellido, Integer DNI, Integer fechaIngreso,String domicilio) {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.DNI = DNI;
        this.FechaIngreso = fechaIngreso;
        this.Domicilio = domicilio;
    }

    @Override
    public String toString() {
        return "Paciente{" +
                "ID=" + ID +
                ", Nombre='" + Nombre + '\'' +
                ", Apellido='" + Apellido + '\'' +
                ", DNI=" + DNI +
                ", FechaIngreso=" + FechaIngreso +
                ", Domicilio='" + Domicilio + '\'' +
                '}';
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public Integer getDNI() {
        return DNI;
    }

    public void setDNI(Integer DNI) {
        this.DNI = DNI;
    }

    public Integer getFechaIngreso() {
        return FechaIngreso;
    }

    public void setFechaIngreso(Integer fechaIngreso) {
        FechaIngreso = fechaIngreso;
    }

    public String getDomicilio() {
        return Domicilio;
    }

    public void setDomicilio(String domicilio) {
        Domicilio = domicilio;
    }
}
