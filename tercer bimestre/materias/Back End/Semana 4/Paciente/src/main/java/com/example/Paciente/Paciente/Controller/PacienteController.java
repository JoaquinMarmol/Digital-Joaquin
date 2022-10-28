package com.example.Paciente.Paciente.Controller;

import com.example.Paciente.Dominio.Paciente;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PacienteController {
    @GetMapping("/index")
    public String welcome (Model model){
        model.addAttribute("nombre","diez");
                return "index";
    }
}
