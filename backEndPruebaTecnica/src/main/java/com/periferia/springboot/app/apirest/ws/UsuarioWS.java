package com.periferia.springboot.app.apirest.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.periferia.springboot.app.apirest.service.IManagerUsuarioService;
import com.periferia.springboot.app.pojo.UsuarioTO;
import com.periferia.springboot.app.technical.CommonWS;
import com.periferia.springboot.app.technical.ResponseTO;

@CrossOrigin(origins= {"*"})
@RestController
@RequestMapping("/usuario")
public class UsuarioWS extends CommonWS {

	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IManagerUsuarioService managerUsuario;

	@GetMapping("/listar")
	public  ResponseTO<String> listarUsuarios() {
		List<UsuarioTO> usuarios= managerUsuario.listarUsuario();
		return   (ResponseTO<String>) buildResponse(usuarios);
	}
	
	@PostMapping("/registrar")
	public ResponseTO<String> RegistroUsuario(@RequestBody UsuarioTO usuario)  {
		String mensaje;
		mensaje = managerUsuario.crearUsuario(usuario);
		return (ResponseTO<String>) buildResponse(mensaje);
	}

	@PutMapping("/actualizar")
	public ResponseTO<String> actualizarUsuario(@RequestBody UsuarioTO usuario)  {
		String mensaje;
		mensaje = managerUsuario.actualizarUsuario(usuario);
		return (ResponseTO<String>) buildResponse(mensaje);
	}
 
	@DeleteMapping("/eliminar")
	public ResponseTO<String> actualizarUsuario(@Param(value = "identificacion") int identificacion)  {
		String mensaje;
		mensaje = managerUsuario.elimnarUsuario(identificacion);
		return (ResponseTO<String>) buildResponse(mensaje);
	}
}
