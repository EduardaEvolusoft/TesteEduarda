import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/perfil-usuario.model';
import { PerfilUsuarioService } from 'src/app/services/perfil-usuario.service';

@Component({
  selector: 'app-add-perfil-usuario',
  templateUrl: './add-perfil-usuario.component.html',
  styleUrls: ['./add-perfil-usuario.component.css']
})
export class AddPerfilUsuarioComponent implements OnInit {

  perfilUsuario: PerfilUsuario = {
    tipo: ''
  };
  submitted = false;
  debug = true;


  constructor(private perfilUsuarioService: PerfilUsuarioService) { }

  ngOnInit(): void {
  }

  savePerfilUsuario(): void {
    const data = {
      tipo: this.perfilUsuario.tipo
    };

    this.perfilUsuarioService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPerfilUsuario(): void {
    this.submitted = false;
    this.debug = true;

    this.perfilUsuario = {
      tipo: ''
    };
  }
}
