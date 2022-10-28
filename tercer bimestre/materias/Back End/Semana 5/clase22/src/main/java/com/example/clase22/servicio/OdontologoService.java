package com.example.clase22.servicio;

import com.example.clase22.dao.IDao;
import com.example.clase22.dao.OdontologoDAOH2;
import com.example.clase22.modelo.Odontologo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OdontologoService {
    private IDao<Odontologo> odontologoIDao;

    public OdontologoService(){
        odontologoIDao=new OdontologoDAOH2();
    }
    public Odontologo buscarOdontologoXId(Integer id){
        return odontologoIDao.buscar(id);
    }
    public List<Odontologo> buscarTodosOdontologos(){
        return odontologoIDao.buscarTodos();
    }
    public Odontologo guardarOdontologo(Odontologo odontologo){
        return odontologoIDao.guardar(odontologo);
    }

    public void borrarOdontologo(Integer id){odontologoIDao.borrar(id);}

    public Odontologo actualizarOdontologo(Odontologo odontologo){
        return odontologoIDao.actualizar(odontologo);
    }
}
