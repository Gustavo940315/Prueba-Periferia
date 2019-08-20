import { Component, OnInit } from '@angular/core';
import { ConsultarUsuarioService } from '../servicio/servicio-consultar-usuario/consultar-usuario.service';
import { usuarioTO } from '../servicio/usuarioTO/usuarioTO';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios: Array<usuarioTO> = [];

  constructor(private consultarUsuarios: ConsultarUsuarioService,
              private storage: Storage) { }

  ngOnInit() {
  }

  consultarUsuario(){
    this.consultarUsuarios.getUsuario
    this.guardarEmailStorage()
  }
  guardarEmailStorage(){
    this.storage.set('numeroIdentificacion',JSON.stringify( this.usuarios));
  }

  
}
