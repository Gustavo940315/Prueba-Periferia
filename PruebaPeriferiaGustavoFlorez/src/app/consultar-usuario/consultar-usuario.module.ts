import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultarUsuarioPage } from './consultar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultarUsuarioPage]
})
export class ConsultarUsuarioPageModule {}
