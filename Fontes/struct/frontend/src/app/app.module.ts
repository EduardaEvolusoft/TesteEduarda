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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';

import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { DetailsUsuarioComponent } from './components/details-usuario/details-usuario.component'; 
import { ListPerfilUsuarioComponent } from './components/list-perfilUsuario/list-perfilUsuario.component';
import { AddPerfilUsuarioComponent } from './components/add-perfilUsuario/add-perfilUsuario.component';
import { DetailsPerfilUsuarioComponent } from './components/details-perfilUsuario/details-perfilUsuario.component'; 



@NgModule({ 
  declarations: [ 
    AppComponent, 
    ListUsuarioComponent,
    AddUsuarioComponent,
    DetailsUsuarioComponent,
    ListPerfilUsuarioComponent,
    AddPerfilUsuarioComponent,
    DetailsPerfilUsuarioComponent,
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
