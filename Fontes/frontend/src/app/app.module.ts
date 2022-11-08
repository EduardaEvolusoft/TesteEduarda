import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAT_DATE_LOCALE } from '@angular/material/core'; 

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

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


@NgModule({ 
  declarations: [ 
    AppComponent, 
ListUsuarioComponent,
AddUsuarioComponent,
DetailsUsuarioComponent,
ListPerfilUsuarioComponent,
AddPerfilUsuarioComponent,
DetailsPerfilUsuarioComponent,
ListPerguntaComponent,
AddPerguntaComponent,
DetailsPerguntaComponent,
ListEnqueteComponent,
AddEnqueteComponent,
DetailsEnqueteComponent,
ListEntrevistadorAutorizadoComponent,
AddEntrevistadorAutorizadoComponent,
DetailsEntrevistadorAutorizadoComponent,
ListEntrevistadoAutorizadoComponent,
AddEntrevistadoAutorizadoComponent,
DetailsEntrevistadoAutorizadoComponent,
ListTipoRespostaComponent,
AddTipoRespostaComponent,
DetailsTipoRespostaComponent,
ListEntrevistaComponent,
AddEntrevistaComponent,
DetailsEntrevistaComponent,
ListRespostaPerguntaComponent,
AddRespostaPerguntaComponent,
DetailsRespostaPerguntaComponent,
  ],
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    MatSnackBarModule, 
    MatTabsModule, 
    BrowserAnimationsModule, 
    MatInputModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatNativeDateModule, 
    MatMenuModule, 
    MatDatepickerModule, 
    FormsModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatSidenavModule, 
    MatTableModule, 
    MatIconModule, 
    MatDividerModule, 
    MatListModule
  ], 
  providers: [ 
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, 
    HttpClient 
  ], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 
