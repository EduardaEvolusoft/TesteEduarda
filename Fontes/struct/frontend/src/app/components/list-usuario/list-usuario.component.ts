import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuarioCollection?: Usuario[];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  debug = true;
  nome = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsuarios();
  }

  retrieveUsuarios(): void {
    this.usuarioService.getAll()
      .subscribe(
        data => {
          this.usuarioCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsuarios();
    this.currentUsuario = {};
    this.currentIndex = -1;
  }

  setActiveUsuario(usuario: Usuario, index: number): void {
    this.currentUsuario = usuario;
    this.currentIndex = index;
  }

  removeAllUsuarios(): void {
    this.usuarioService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentUsuario = {};
    this.currentIndex = -1;

    this.usuarioService.findByNome(this.nome)
      .subscribe(
        data => {
          this.usuarioCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
