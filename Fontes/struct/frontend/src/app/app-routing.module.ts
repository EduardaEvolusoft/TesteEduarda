import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { DetailsUsuarioComponent } from './components/details-usuario/details-usuario.component'; 
import { ListPerfilUsuarioComponent } from './components/list-perfilUsuario/list-perfilUsuario.component';
import { AddPerfilUsuarioComponent } from './components/add-perfilUsuario/add-perfilUsuario.component';
import { DetailsPerfilUsuarioComponent } from './components/details-perfilUsuario/details-perfilUsuario.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' }, 

  { path: 'usuarios', component: ListUsuarioComponent },
  { path: 'usuarios/:id', component: DetailsUsuarioComponent }, 
  { path: 'add/usuario', component: AddUsuarioComponent }, 
  { path: 'perfilsUsuarios', component: ListPerfilUsuarioComponent },
  { path: 'perfilsUsuarios/:id', component: DetailsPerfilUsuarioComponent }, 
  { path: 'add/perfilUsuario', component: AddPerfilUsuarioComponent }, 

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
