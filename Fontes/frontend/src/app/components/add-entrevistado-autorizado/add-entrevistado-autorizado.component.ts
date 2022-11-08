import { Component, OnInit } from '@angular/core';
import { EntrevistadoAutorizado } from 'src/app/models/entrevistado-autorizado.model';
import { EntrevistadoAutorizadoService } from 'src/app/services/entrevistado-autorizado.service';

@Component({
  selector: 'app-add-entrevistado-autorizado',
  templateUrl: './add-entrevistado-autorizado.component.html',
  styleUrls: ['./add-entrevistado-autorizado.component.css']
})
export class AddEntrevistadoAutorizadoComponent implements OnInit {

  entrevistadoAutorizado: EntrevistadoAutorizado = {
    tipoPermissao: ''
  };
  submitted = false;
  debug = true;


  constructor(private entrevistadoAutorizadoService: EntrevistadoAutorizadoService) { }

  ngOnInit(): void {
  }

  saveEntrevistadoAutorizado(): void {
    const data = {
      idUsuario: this.entrevistadoAutorizado.idUsuario,
      tipoPermissao: this.entrevistadoAutorizado.tipoPermissao
    };

    this.entrevistadoAutorizadoService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEntrevistadoAutorizado(): void {
    this.submitted = false;
    this.debug = true;

    this.entrevistadoAutorizado = {
      tipoPermissao: ''
    };
  }
}
