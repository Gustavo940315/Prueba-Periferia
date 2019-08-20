package com.periferia.springboot.app.model.dao;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.periferia.springboot.app.model.entity.Usuario;

@Repository
public interface  IUsuarioDao extends CrudRepository<Usuario, Integer>{

	@Query("SELECT COUNT(DA) FROM Usuario DA WHERE DA.numeroIdentificacion = :numeroIdentificacion")
	public int countUsuario( @Param("numeroIdentificacion") int numeroIdentificacion);
	
	@Query("SELECT DA FROM Usuario DA WHERE DA.numeroIdentificacion = :numeroIdentificacion")
	public Usuario obtenerUsuario( @Param("numeroIdentificacion") int numeroIdentificacion);
}
