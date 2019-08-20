package com.periferia.springboot.app.apirest.service.imp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.periferia.springboot.app.apirest.service.IManagerUsuarioService;
import com.periferia.springboot.app.model.dao.services.IUsuarioService;
import com.periferia.springboot.app.model.entity.Usuario;
import com.periferia.springboot.app.pojo.UsuarioTO;

@Service
public class ManagerUsuario implements IManagerUsuarioService{

	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Override
	public List<UsuarioTO> listarUsuario() {
		List<Usuario> usuarios = usuarioService.listarUsuario();
		List<UsuarioTO>  listaUsuarios= new ArrayList<UsuarioTO>();
		UsuarioTO usuarioTO = null;
		for (Usuario usuario : usuarios) {
			usuarioTO= new UsuarioTO();
			usuarioTO.setApellidos(usuario.getApellidos());
			usuarioTO.setDireccion(usuario.getDireccion());
			usuarioTO.setNombres(usuario.getNombres());
			usuarioTO.setTelefono(usuario.getTelefono());
			usuarioTO.setNumeroIdentificacion(usuario.getNumeroIdentificacion());
			listaUsuarios.add(usuarioTO);
		}
		return listaUsuarios;
	}

	@Override
	public String crearUsuario(UsuarioTO usuario) {
		int banderaUsuario  = usuarioService.validarUsuario(usuario.getNumeroIdentificacion());
		String mensaje ="";
		if(banderaUsuario == 0) {
			Usuario usuarioEntity = new Usuario();
			usuarioEntity.setApellidos(usuario.getApellidos());
			usuarioEntity.setNombres(usuario.getNombres());
			usuarioEntity.setFechaCreacion(new Date());
			usuarioEntity.setNumeroIdentificacion(usuario.getNumeroIdentificacion());
			usuarioEntity.setTelefono(usuario.getTelefono());
			usuarioEntity.setDireccion(usuario.getDireccion());
			usuarioService.save(usuarioEntity);
			mensaje ="ok";
		}else {
			mensaje="Usuario ya Existe";
		}
		
		return mensaje;
	}

	@Override
	public String actualizarUsuario(UsuarioTO usuario) {
		Usuario usuarioEntity= usuarioService.obtenerUsuario(usuario.getNumeroIdentificacion());
		usuarioEntity.setNombres(usuario.getNombres());
		usuarioEntity.setApellidos(usuario.getApellidos());
		usuarioEntity.setDireccion(usuario.getDireccion());
		usuarioEntity.setTelefono(usuario.getTelefono());
		usuarioEntity.setFechaUltimaModificacion(new Date());
		usuarioService.save(usuarioEntity);
		return "ok";
	}

	@Override
	public String elimnarUsuario(int identificacion) {
		Usuario usuarioEntity= usuarioService.obtenerUsuario(identificacion);
		usuarioService.eliminarUsuario(usuarioEntity); 
		return "ok";
	}

}
