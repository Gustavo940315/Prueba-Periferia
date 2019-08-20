package com.periferia.springboot.app.apirest.service;

import java.util.List;

import com.periferia.springboot.app.pojo.UsuarioTO;

public interface IManagerUsuarioService {

	public List<UsuarioTO> listarUsuario();
	
	public String crearUsuario(UsuarioTO usuario);
	
	public String actualizarUsuario(UsuarioTO usuario);
	
	public String elimnarUsuario(int identificacion);
}
