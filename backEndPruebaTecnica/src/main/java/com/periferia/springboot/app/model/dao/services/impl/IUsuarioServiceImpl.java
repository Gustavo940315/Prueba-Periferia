package com.periferia.springboot.app.model.dao.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.periferia.springboot.app.model.dao.IUsuarioDao;
import com.periferia.springboot.app.model.dao.services.IUsuarioService;
import com.periferia.springboot.app.model.entity.Usuario;

@Service
public class IUsuarioServiceImpl implements IUsuarioService{

	@Autowired
	private IUsuarioDao usuariDao ;
	
	@Override
	public Usuario save(Usuario usuario) {
		return usuariDao.save(usuario);
	}

	@Override
	public int validarUsuario(int identificacion) {
		return usuariDao.countUsuario(identificacion);
	}

	@Override
	public List<Usuario> listarUsuario() {
		return (List<Usuario>) usuariDao.findAll();
	}

	@Override
	public Usuario obtenerUsuario(int identificacion) {
		return usuariDao.obtenerUsuario(identificacion);
	}

	@Override
	public void eliminarUsuario(Usuario usuario) {
		usuariDao.delete(usuario);
	}

}
