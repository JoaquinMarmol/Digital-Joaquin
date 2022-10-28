package com.example.clase22.servicio;

import com.example.clase22.dao.IDao;
import com.example.clase22.dao.PacienteDAOH2;
import com.example.clase22.modelo.Odontologo;
import com.example.clase22.modelo.Paciente;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {
    private IDao<Paciente> pacienteIDao;

    public PacienteService() {
        this.pacienteIDao = new PacienteDAOH2();
    }
    public Paciente guardar(Paciente paciente){
        return pacienteIDao.guardar(paciente);
    }
    public Paciente buscar(Integer id){
        return pacienteIDao.buscar(id);
    }
    public Paciente buscarXEmail(String email){
        return pacienteIDao.buscarXCriterio(email);
    }
    public List<Paciente> buscarTodos(){
        return pacienteIDao.buscarTodos();
    }
    public void borrarPaciente(Integer id){pacienteIDao.borrar(id);}
    public Paciente actualizarPaciente (Paciente paciente){return pacienteIDao.actualizar(paciente);}
}
