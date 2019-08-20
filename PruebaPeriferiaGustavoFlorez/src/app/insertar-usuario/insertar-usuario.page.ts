import { Component, OnInit } from '@angular/core';
import { InsertarUsuarioService } from '../servicio/servicio-insertar-usuario/insertar-usuario.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.page.html',
  styleUrls: ['./insertar-usuario.page.scss'],
})
export class InsertarUsuarioPage implements OnInit {

  nombres: String;
  apellidos: String;
  numeroIdentificacion: Number; 
  direccion: String;
  telefono: Number;
  mensaje: string ="";

  constructor(private ServicioRegistroUsuario: InsertarUsuarioService,
              private router: Router,
              private alertController:AlertController) { }

  ngOnInit() {
  }

  insertarUsuario(){
    this.ServicioRegistroUsuario.servicioRegistro(this.nombres,
                                                  this.apellidos,
                                                  this.numeroIdentificacion,
                                                  this.telefono,
                                                  this.direccion).subscribe(responseJS => { if(responseJS.body == 'Usuario ya Existe'){
                                                    this.mensaje = 'Ya se encuentra registrado este usuario.';
                                                    this.mostrarMensaje(this.mensaje);
                                                  }else{
                                                    this.mensaje = 'Se registro exitosamente el usuario.'
                                                    this.mostrarMensaje(this.mensaje);
                                                    this.router.navigate(["/home"]);
                                                  }
       } );
  }

  async mostrarMensaje(mnj:string) {  
    const alert = await this.alertController.create({
      message: mnj,
      buttons: ['OK']
    });

    await alert.present();
  }
}
