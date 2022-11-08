import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/perfil-usuario.model';
import { PerfilUsuarioService } from 'src/app/services/perfil-usuario.service';

@Component({
  selector: 'app-list-perfil-usuario',
  templateUrl: './list-perfil-usuario.component.html',
  styleUrls: ['./list-perfil-usuario.component.css']
})
export class ListPerfilUsuarioComponent implements OnInit {

  perfilUsuarioCollection?: PerfilUsuario[];
  currentPerfilUsuario: PerfilUsuario = {};
  currentIndex = -1;
  debug = true;

  constructor(private perfilUsuarioService: PerfilUsuarioService) { }

  ngOnInit(): void {
    this.retrievePerfilsUsuarios();
  }

  retrievePerfilsUsuarios(): void {
    this.perfilUsuarioService.getAll()
      .subscribe(
        data => {
          this.perfilUsuarioCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePerfilsUsuarios();
    this.currentPerfilUsuario = {};
    this.currentIndex = -1;
  }

  setActivePerfilUsuario(perfilUsuario: PerfilUsuario, index: number): void {
    this.currentPerfilUsuario = perfilUsuario;
    this.currentIndex = index;
  }

  removeAllPerfilsUsuarios(): void {
    this.perfilUsuarioService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
