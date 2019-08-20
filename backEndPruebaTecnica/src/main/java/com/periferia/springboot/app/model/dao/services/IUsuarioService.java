package com.periferia.springboot.app.model.dao.services;

import java.util.List;

import com.periferia.springboot.app.model.entity.Usuario;

public interface IUsuarioService {

	public Usuario save(Usuario usuario);
	
	public int validarUsuario(int identificacion);
	
	public List<Usuario> listarUsuario();
	
	public Usuario obtenerUsuario(int identificacion);
	
	public void eliminarUsuario(Usuario usuario);
}
