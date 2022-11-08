import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/perfilUsuario.model';
import { PerfilUsuarioService } from 'src/app/services/perfilUsuario.service';

@Component({
  selector: 'app-add-perfilUsuario',
  templateUrl: './add-perfilUsuario.component.html',
  styleUrls: ['./add-perfilUsuario.component.css']
})
export class AddPerfilUsuarioComponent implements OnInit {

  perfilUsuario: PerfilUsuario = {
    tipo: ''
  };
  submitted = false;
  debug = true;


  constructor(private PerfilUsuarioService: PerfilUsuarioService) { }

  ngOnInit(): void {
  }

  savePerfilUsuario(): void {
    const data = {
      tipo: this.perfilUsuario.tipo
    };

    this.PerfilUsuarioService.create(data)
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
