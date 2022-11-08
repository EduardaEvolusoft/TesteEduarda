import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/perfilUsuario.model';
import { PerfilUsuarioService } from 'src/app/services/perfilUsuario.service';

@Component({
  selector: 'app-list-perfilUsuario',
  templateUrl: './list-perfilUsuario.component.html',
  styleUrls: ['./list-perfilUsuario.component.css']
})
export class ListPerfilUsuarioComponent implements OnInit {

  perfilUsuarioCollection?: PerfilUsuario[];
  currentPerfilUsuario: PerfilUsuario = {};
  currentIndex = -1;
  debug = true;
  tipo = '';
  perfilUsuarioService: any;

  constructor(private PerfilUsuarioService: PerfilUsuarioService) { }

  ngOnInit(): void {
    this.retrievePerfilsUsuarios();
  }

  retrievePerfilsUsuarios(): void {
    this.PerfilUsuarioService.getAll()
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
    this.PerfilUsuarioService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTipo(): void {
    this.currentPerfilUsuario = {};
    this.currentIndex = -1;

    this.PerfilUsuarioService.findByTipo(this.tipo)
      .subscribe(
        data => {
          this.perfilUsuarioCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
