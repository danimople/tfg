package com.tfg.trabajofg.dao;

import com.tfg.trabajofg.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();
    void eliminar(Long id);

    void registrar(Usuario usuario);

    boolean obtenerUsuarioPorCredenciales (Usuario usuario);
}
