import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConsultarUsuarioService } from '../servicio/servicio-consultar-usuario/consultar-usuario.service';
import { EliminarUsuarioService } from '../servicio/servicio-eliminar-usuario/eliminar-usuario.service';
import { usuarioTO } from '../servicio/usuarioTO/usuarioTO';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.page.html',
  styleUrls: ['./consultar-usuario.page.scss'],
})
export class ConsultarUsuarioPage implements OnInit {

  usuarios: Array<usuarioTO> = [];
  mensaje: string ="";

  constructor(private storage: Storage, 
              public alertController: AlertController,
              private router: Router,
              private consultaServicio: ConsultarUsuarioService,
              private eliminarService:EliminarUsuarioService) {
                this.consultarUsuario();
               }

  ngOnInit() {
    this.consultarUsuario();
  }

  consultarUsuario(){
    this.consultaServicio.getUsuario()
                          .subscribe(
                            responseJS =>{
                              this.usuarios = responseJS.body;
                            });
  }

  eliminarUsuario(usuario:usuarioTO){
    this.eliminarService.eliminarUsuario(usuario.numeroIdentificacion)
                        .subscribe(
                          responseJS =>{
                            if(responseJS.body ="ok"){
                              this.presentAlert();
                              this.consultarUsuario();
                            }
                          }
                        );
  }

  editarUsuario(usuario:usuarioTO){
    this.storage.set("us",JSON.stringify(usuario));
    this.router.navigate(["/editar-usuario"]);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'OK',
      message: 'Se elimina Persona',
      buttons: ['OK']
    });

    await alert.present();
  }


}
