import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    senha: '',
    email: '',
  };
  submitted = false;
  debug = true;


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  saveUsuario(): void {
    const data = {
      nome: this.usuario.nome,
      senha: this.usuario.senha,
      email: this.usuario.email,
      perfil: this.usuario.perfil
    };

    this.usuarioService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUsuario(): void {
    this.submitted = false;
    this.debug = true;

    this.usuario = {
      nome: '',
      senha: '',
      email: '',
    };
  }
}
