import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'consultar-usuario', loadChildren: './consultar-usuario/consultar-usuario.module#ConsultarUsuarioPageModule' },
  { path: 'insertar-usuario', loadChildren: './insertar-usuario/insertar-usuario.module#InsertarUsuarioPageModule' },
  { path: 'editar-usuario', loadChildren: './editar-usuario/editar-usuario.module#EditarUsuarioPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
