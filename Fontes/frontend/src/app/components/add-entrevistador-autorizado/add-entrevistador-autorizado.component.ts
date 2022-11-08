import { Component, OnInit } from '@angular/core';
import { EntrevistadorAutorizado } from 'src/app/models/entrevistador-autorizado.model';
import { EntrevistadorAutorizadoService } from 'src/app/services/entrevistador-autorizado.service';

@Component({
  selector: 'app-add-entrevistador-autorizado',
  templateUrl: './add-entrevistador-autorizado.component.html',
  styleUrls: ['./add-entrevistador-autorizado.component.css']
})
export class AddEntrevistadorAutorizadoComponent implements OnInit {

  entrevistadorAutorizado: EntrevistadorAutorizado = {
    tipoPermissao: ''
  };
  submitted = false;
  debug = true;


  constructor(private entrevistadorAutorizadoService: EntrevistadorAutorizadoService) { }

  ngOnInit(): void {
  }

  saveEntrevistadorAutorizado(): void {
    const data = {
      idUsuario: this.entrevistadorAutorizado.idUsuario,
      tipoPermissao: this.entrevistadorAutorizado.tipoPermissao
    };

    this.entrevistadorAutorizadoService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEntrevistadorAutorizado(): void {
    this.submitted = false;
    this.debug = true;

    this.entrevistadorAutorizado = {
      tipoPermissao: ''
    };
  }
}
