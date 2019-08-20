import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../constantes';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const cUrlRegistro=AppSettings.API_HOST+'registrar';

@Injectable({
  providedIn: 'root'
})
export class InsertarUsuarioService {

  RegistroTO:{
    nombres: String,
    apellidos: String,
    numeroIdentificacion: Number, 
    direccion: String,
    telefono: Number;
  };

  constructor(private http:HttpClient) { }
  
  servicioRegistro( nombresUsuario: String, 
                    apellidosUsuario: String, 
                    numeroIdetificacionUsuario: Number,
                    numeroContactoUsuario: Number,
                    direccionUsuario: String){
                    this.RegistroTO={nombres:nombresUsuario, 
                                      apellidos:apellidosUsuario,
                                      numeroIdentificacion: numeroIdetificacionUsuario,
                                      telefono:numeroContactoUsuario,
                                      direccion: direccionUsuario,
    }; 
  return this.http.post<any>(cUrlRegistro,this.RegistroTO,httpOptions);
  }
}
