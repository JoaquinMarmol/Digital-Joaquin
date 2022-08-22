package mesas.service;

import mesas.dao.IDao;

import mesas.modelo.Paciente;

import java.util.List;


public class PacienteService {
    private IDao <Paciente> pacienteIDao;

    public PacienteService(IDao<Paciente> pacienteIDao) {
        this.pacienteIDao = pacienteIDao;
    }

    public Paciente guardar(Paciente paciente){
        return pacienteIDao.guardar(paciente);
    }
    public Paciente buscarXId(Integer id){
        return pacienteIDao.buscar(id);
    }
    public List<Paciente> buscarTodos(){return pacienteIDao.buscarTodos(); }
    public Paciente modificar(Paciente paciente){
        return pacienteIDao.modificar(paciente);
    }

    public void eliminar(Integer id){
        pacienteIDao.eliminar(id);
    }


}
