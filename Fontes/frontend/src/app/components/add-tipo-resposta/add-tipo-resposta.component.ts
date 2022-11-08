import { Component, OnInit } from '@angular/core';
import { TipoResposta } from 'src/app/models/tipo-resposta.model';
import { TipoRespostaService } from 'src/app/services/tipo-resposta.service';

@Component({
  selector: 'app-add-tipo-resposta',
  templateUrl: './add-tipo-resposta.component.html',
  styleUrls: ['./add-tipo-resposta.component.css']
})
export class AddTipoRespostaComponent implements OnInit {

  tipoResposta: TipoResposta = {
    nome: ''
  };
  submitted = false;
  debug = true;


  constructor(private tipoRespostaService: TipoRespostaService) { }

  ngOnInit(): void {
  }

  saveTipoResposta(): void {
    const data = {
      nome: this.tipoResposta.nome
    };

    this.tipoRespostaService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTipoResposta(): void {
    this.submitted = false;
    this.debug = true;

    this.tipoResposta = {
      nome: ''
    };
  }
}
