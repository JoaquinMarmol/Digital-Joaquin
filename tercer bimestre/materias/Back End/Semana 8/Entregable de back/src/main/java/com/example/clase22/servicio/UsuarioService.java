package com.example.clase22.servicio;

import com.example.clase22.entities.Usuario;
import com.example.clase22.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuarioBuscado= usuarioRepository.findUsuarioByEmail(username);
        if (usuarioBuscado.isPresent()){
            return usuarioBuscado.get();
        }
        else {
            throw new UsernameNotFoundException("El correo ingresado no existe vinculado a un usuario.");
        }
    }
}
