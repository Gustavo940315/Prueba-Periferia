import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../constantes';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const urlEliminarUsuario=AppSettings.API_HOST+'eliminar';

@Injectable({
  providedIn: 'root'
})
export class EliminarUsuarioService {

  constructor(private http: HttpClient) { }

  eliminarUsuario(numeroIdetificacionUsuario: Number):Observable<any>{
    return this.http.delete<any>(urlEliminarUsuario+"?identificacion="+numeroIdetificacionUsuario,httpOptions);
  }
}

