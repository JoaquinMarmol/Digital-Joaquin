package servicios;

import dao.IDao;
import modelo.Odontologo;

import java.util.List;

public class OdontologoServicio {
    private IDao <Odontologo> odontologoIDao;

    public OdontologoServicio(IDao<Odontologo> odontologoIDao){
        this.odontologoIDao = odontologoIDao;}


    public Odontologo guardar(Odontologo odontologo){
        return odontologoIDao.guardar(odontologo);}



    public Odontologo buscar(Integer numeroMatricula){
        return odontologoIDao.buscar(numeroMatricula);}



    public List<Odontologo> buscarTodos(){
        return odontologoIDao.buscarTodos();}

}
