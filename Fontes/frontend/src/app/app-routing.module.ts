import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { DetailsUsuarioComponent } from './components/details-usuario/details-usuario.component'; 
import { ListPerfilUsuarioComponent } from './components/list-perfil-usuario/list-perfil-usuario.component';
import { AddPerfilUsuarioComponent } from './components/add-perfil-usuario/add-perfil-usuario.component';
import { DetailsPerfilUsuarioComponent } from './components/details-perfil-usuario/details-perfil-usuario.component'; 
import { ListPerguntaComponent } from './components/list-pergunta/list-pergunta.component';
import { AddPerguntaComponent } from './components/add-pergunta/add-pergunta.component';
import { DetailsPerguntaComponent } from './components/details-pergunta/details-pergunta.component'; 
import { ListEnqueteComponent } from './components/list-enquete/list-enquete.component';
import { AddEnqueteComponent } from './components/add-enquete/add-enquete.component';
import { DetailsEnqueteComponent } from './components/details-enquete/details-enquete.component'; 
import { ListEntrevistadorAutorizadoComponent } from './components/list-entrevistador-autorizado/list-entrevistador-autorizado.component';
import { AddEntrevistadorAutorizadoComponent } from './components/add-entrevistador-autorizado/add-entrevistador-autorizado.component';
import { DetailsEntrevistadorAutorizadoComponent } from './components/details-entrevistador-autorizado/details-entrevistador-autorizado.component'; 
import { ListEntrevistadoAutorizadoComponent } from './components/list-entrevistado-autorizado/list-entrevistado-autorizado.component';
import { AddEntrevistadoAutorizadoComponent } from './components/add-entrevistado-autorizado/add-entrevistado-autorizado.component';
import { DetailsEntrevistadoAutorizadoComponent } from './components/details-entrevistado-autorizado/details-entrevistado-autorizado.component'; 
import { ListTipoRespostaComponent } from './components/list-tipo-resposta/list-tipo-resposta.component';
import { AddTipoRespostaComponent } from './components/add-tipo-resposta/add-tipo-resposta.component';
import { DetailsTipoRespostaComponent } from './components/details-tipo-resposta/details-tipo-resposta.component'; 
import { ListEntrevistaComponent } from './components/list-entrevista/list-entrevista.component';
import { AddEntrevistaComponent } from './components/add-entrevista/add-entrevista.component';
import { DetailsEntrevistaComponent } from './components/details-entrevista/details-entrevista.component'; 
import { ListRespostaPerguntaComponent } from './components/list-resposta-pergunta/list-resposta-pergunta.component';
import { AddRespostaPerguntaComponent } from './components/add-resposta-pergunta/add-resposta-pergunta.component';
import { DetailsRespostaPerguntaComponent } from './components/details-resposta-pergunta/details-resposta-pergunta.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'eventos', pathMatch: 'full' }, 

  { path: 'usuarios', component: ListUsuarioComponent },
  { path: 'usuarios/:id', component: DetailsUsuarioComponent }, 
  { path: 'add/usuario', component: AddUsuarioComponent }, 
  { path: 'perfilsUsuarios', component: ListPerfilUsuarioComponent },
  { path: 'perfilsUsuarios/:id', component: DetailsPerfilUsuarioComponent }, 
  { path: 'add/perfilUsuario', component: AddPerfilUsuarioComponent }, 
  { path: 'perguntas', component: ListPerguntaComponent },
  { path: 'perguntas/:id', component: DetailsPerguntaComponent }, 
  { path: 'add/pergunta', component: AddPerguntaComponent }, 
  { path: 'enquetes', component: ListEnqueteComponent },
  { path: 'enquetes/:id', component: DetailsEnqueteComponent }, 
  { path: 'add/enquete', component: AddEnqueteComponent }, 
  { path: 'entrevistadoresAutorizados', component: ListEntrevistadorAutorizadoComponent },
  { path: 'entrevistadoresAutorizados/:id', component: DetailsEntrevistadorAutorizadoComponent }, 
  { path: 'add/entrevistadorAutorizado', component: AddEntrevistadorAutorizadoComponent }, 
  { path: 'entrevistadosAutorizados', component: ListEntrevistadoAutorizadoComponent },
  { path: 'entrevistadosAutorizados/:id', component: DetailsEntrevistadoAutorizadoComponent }, 
  { path: 'add/entrevistadoAutorizado', component: AddEntrevistadoAutorizadoComponent }, 
  { path: 'tiposRespostas', component: ListTipoRespostaComponent },
  { path: 'tiposRespostas/:id', component: DetailsTipoRespostaComponent }, 
  { path: 'add/tipoResposta', component: AddTipoRespostaComponent }, 
  { path: 'entrevistas', component: ListEntrevistaComponent },
  { path: 'entrevistas/:id', component: DetailsEntrevistaComponent }, 
  { path: 'add/entrevista', component: AddEntrevistaComponent }, 
  { path: 'respostasPerguntas', component: ListRespostaPerguntaComponent },
  { path: 'respostasPerguntas/:id', component: DetailsRespostaPerguntaComponent }, 
  { path: 'add/respostaPergunta', component: AddRespostaPerguntaComponent }, 


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
