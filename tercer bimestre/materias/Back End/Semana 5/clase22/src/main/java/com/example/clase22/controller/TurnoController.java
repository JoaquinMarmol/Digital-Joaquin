package com.example.clase22.controller;

import com.example.clase22.modelo.Odontologo;
import com.example.clase22.modelo.Paciente;
import com.example.clase22.modelo.Turno;
import com.example.clase22.servicio.OdontologoService;
import com.example.clase22.servicio.PacienteService;
import com.example.clase22.servicio.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turnos")
public class TurnoController {
    private final TurnoService turnoService;
    private final PacienteService pacienteService;
    private final OdontologoService odontologoService;

    @Autowired
    public TurnoController(TurnoService turnoService, PacienteService pacienteService, OdontologoService odontologoService) {
        this.turnoService = turnoService;
        this.pacienteService = pacienteService;
        this.odontologoService = odontologoService;
    }

    @PostMapping
    public ResponseEntity<Turno> registrarTurno(@RequestBody Turno turno){
        ResponseEntity<Turno> respuesta;
        Odontologo odontologo = odontologoService.buscarOdontologoXId(turno.getOdontologo().getId());
        Paciente paciente = pacienteService.buscar(turno.getPaciente().getId());

        //cuando esta mal
        if (odontologo==null || paciente==null){
            respuesta=ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        else{
            //cuando esta ok
            //registrar el turno porque ambos existen
            turno.setOdontologo(odontologo);
            turno.setPaciente(paciente);
            respuesta=ResponseEntity.ok(turnoService.guardar(turno));
        }
        return respuesta;
    }

    @GetMapping()
    public List<Turno> buscarAllTurnos(){
        return turnoService.buscarTodos();
    }


    @GetMapping("/{id}")
    public ResponseEntity<String> buscarXId (@PathVariable("id") Integer id){
        ResponseEntity<String> respuesta;
        Turno turno = turnoService.buscar(id);
        //cuando esta mal
        if (odontologoService.buscarOdontologoXId(turno.getOdontologo().getId())==null
                ||pacienteService.buscar(turno.getPaciente().getId())==null){
            respuesta=ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        else{
            //cuando esta ok
            //registrar el turno porque ambos existen
            turnoService.buscar(id);
            respuesta=ResponseEntity.ok("El turno con la id "+id+" es el siguiente: ");
        }
        return respuesta;

    }@DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarTurno(@PathVariable("id") Integer id){
        ResponseEntity<String> respuesta;
        Turno turno = turnoService.buscar(id);
        //cuando esta mal
        if (odontologoService.buscarOdontologoXId(turno.getOdontologo().getId())==null
                ||pacienteService.buscar(turno.getPaciente().getId())==null){
            respuesta=ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        else{
            //cuando esta ok
            //registrar el turno porque ambos existen
            turnoService.borrarTurno(id);
            respuesta=ResponseEntity.ok("El turno con la id "+id+" ha sido eliminado");
        }
        return respuesta;
    }
    @PutMapping()
    public ResponseEntity<Turno> eliminarTurno(@RequestBody Turno turno){
        ResponseEntity<Turno> respuesta;
        Turno turnoActualizado;
        //cuando esta mal
        if (odontologoService.buscarOdontologoXId(turno.getOdontologo().getId())==null
                ||pacienteService.buscar(turno.getPaciente().getId())==null){
            respuesta=ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        else{
            //cuando esta ok
            //registrar el turno porque ambos existen
            turnoActualizado = turnoService.actualizarTurno(turno);
            respuesta=ResponseEntity.ok(turnoActualizado);
        }
        return respuesta;
    }

}
