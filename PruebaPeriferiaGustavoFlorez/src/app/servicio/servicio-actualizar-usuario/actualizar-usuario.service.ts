import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../constantes';
import { usuarioTO } from '../usuarioTO/usuarioTO';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const urlEditarPerfil=AppSettings.API_HOST+'actualizar';

@Injectable({
  providedIn: 'root'
})
export class ActualizarUsuarioService {

  constructor(private http:HttpClient) { }

  editarPerfilServicio( usuarios: usuarioTO
    ){
return this.http.put<any>(urlEditarPerfil,usuarios,httpOptions);
  }
}
