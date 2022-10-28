package com.example.clase22.security;

import com.example.clase22.entities.RolUsuario;
import com.example.clase22.entities.Usuario;
import com.example.clase22.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CargadoraDeDatos implements ApplicationRunner {
    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        //cargar un usuario previo al inicio de todo
        //guardar un usuario mediante repository
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        String pass="digital";
        String passHash=passwordEncoder.encode(pass);
        Usuario usuario= new Usuario();
        usuario.setNombre("Joaqusdadin");
        usuario.setEmail("joaquin@xd");
        usuario.setPassword(passHash);
        usuario.setUsuarioRole(RolUsuario.ROLE_USER);
        usuarioRepository.save(usuario);

        String pass2="digital123";
        String passHash2=passwordEncoder.encode(pass2);
        Usuario usuario2= new Usuario();
        usuario2.setNombre("joaquin");
        usuario2.setEmail("joaquinmarmolnecochea@gmail.com");
        usuario2.setPassword(passHash2);
        usuario2.setUsuarioRole(RolUsuario.ROLE_ADMIN);
        usuarioRepository.save(usuario2);
    }
}
