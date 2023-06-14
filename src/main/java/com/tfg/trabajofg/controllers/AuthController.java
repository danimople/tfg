package com.tfg.trabajofg.controllers;

import com.tfg.trabajofg.dao.UsuarioDao;
import com.tfg.trabajofg.models.Usuario;
import com.tfg.trabajofg.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario) {
        if (usuarioDao.obtenerUsuarioPorCredenciales(usuario)){
            return "OK";
        }
        return "FAIL";
    }

}
