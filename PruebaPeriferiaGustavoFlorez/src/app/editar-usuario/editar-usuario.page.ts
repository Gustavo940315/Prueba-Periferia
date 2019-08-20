import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ActualizarUsuarioService } from '../servicio/servicio-actualizar-usuario/actualizar-usuario.service';
import { Storage } from '@ionic/storage';
import { usuarioTO } from '../servicio/usuarioTO/usuarioTO';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  nombres: String;
  apellidos: String;
  numeroIdentificacion: Number; 
  direccion: String;
  telefono: Number;
  mensaje: string ="";
  usuario : usuarioTO = new usuarioTO();

  constructor(private router: Router,
    public alertController: AlertController,
    private editarUsuario: ActualizarUsuarioService,
    private storage: Storage) { }

  ngOnInit() {
    this.cargarDatosStorage()
  }

  ServicioEditarUsuario(){
    if(isNullOrUndefined(this.nombres) || isNullOrUndefined(this.apellidos) || 
      isNullOrUndefined(this.direccion) ||isNullOrUndefined(this.telefono)){
      
      //console.log(this.nombres, this.apellidos, this.direccion);
      this.mensaje
      this.mensaje = 'Verifique los campos';
      this.editoPerfilMensajes(this.mensaje);  
    }else{
      this.usuario.apellidos = this.apellidos;
      this.usuario.nombres = this.nombres;
      this.usuario.telefono = this.telefono;
      this.usuario.direccion = this.direccion;
    this.editarUsuario.editarPerfilServicio(this.usuario).subscribe(responseJS => {if(responseJS.body == 'ok'){
                                                                        this.mensaje = 'Se actulizo exitosamente su informaciòn';
                                                                        this.editoPerfilMensajes(this.mensaje);                                                     
                                                                        this.router.navigate(["/home"]);
                                                                                }else{
                                                                                  responseJS.body
                                                                                  this.mensaje = 'No se logro actualizar sus datos';
                                                                                  this.editoPerfilMensajes(this.mensaje);
                                                                              }},); 
    }
}

  async editoPerfilMensajes( mnj:string){
    const alert = await this.alertController.create({
      message: mnj, 
      buttons: ['OK']
    });

    await alert.present();
  } 

  cargarDatosStorage(){
    this.storage.get('us').then((val) => {
      this.usuario = JSON.parse(val);
     // console.log( this.usuario);
      });
  }
}


