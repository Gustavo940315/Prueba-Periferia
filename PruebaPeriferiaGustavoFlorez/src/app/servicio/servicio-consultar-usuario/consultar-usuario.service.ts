import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../constantes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const cUrlConsulta=AppSettings.API_HOST+'listar';

@Injectable({
  providedIn: 'root'
})
export class ConsultarUsuarioService {

  constructor(private httpClient:HttpClient){}

  getUsuario():Observable<any>{
    return this.httpClient.get(cUrlConsulta,httpOptions);
  }
}
