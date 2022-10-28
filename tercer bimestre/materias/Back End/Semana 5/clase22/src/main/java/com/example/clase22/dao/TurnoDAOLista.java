package com.example.clase22.dao;

import com.example.clase22.modelo.Turno;

import java.util.ArrayList;
import java.util.List;

public class TurnoDAOLista implements IDao<Turno> {
    private List<Turno> turnos;

    public TurnoDAOLista() {
        turnos = new ArrayList<>();
    }

    @Override
    public Turno guardar(Turno turno) {
        turnos.add(turno);
        return turno;
    }

    @Override
    public Turno buscar(Integer id) {
        Turno turnoBuscado = null;
        for (Turno turno : turnos) {
            if (turno.getId() == id) {
                turnoBuscado = turno;
                return turnoBuscado;
            }
        }
        return turnoBuscado;
    }

    @Override
    public Turno buscarXCriterio(String criterio) {
        return null;
    }

    @Override
    public List<Turno> buscarTodos() {
        return turnos;
    }

    @Override
    public void borrar(Integer id) {
        for (Turno turno : turnos) {
            if (turno.getId() == id) {
                turnos.remove(turno);
            }
        }

    }

    @Override
    public Turno actualizar(Turno nuevoTurno) {
        //Cuenta las iteraciones totales del for
        int forCount = 0;

        //Cuando encuentra el turno a modificar guarda el indice de ese momento para usarlo despues
        int indexOfUpdated = 0;

        for (Turno turno : turnos) {
            // Si la id del turno en el que estamos es igual a la id del turno nuevo pasado por parametro,
            // setea ese nuevo turno al turno viejo
            if (turno.getId() == nuevoTurno.getId()) {
                turnos.set(forCount, nuevoTurno);
                indexOfUpdated = forCount;
            }
            forCount += 1;
        }
        return turnos.get(indexOfUpdated);
    }
}
