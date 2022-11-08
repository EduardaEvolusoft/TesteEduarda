import { Component, OnInit } from '@angular/core';
import { Entrevista } from 'src/app/models/entrevista.model';
import { EntrevistaService } from 'src/app/services/entrevista.service';

@Component({
  selector: 'app-add-entrevista',
  templateUrl: './add-entrevista.component.html',
  styleUrls: ['./add-entrevista.component.css']
})
export class AddEntrevistaComponent implements OnInit {

  entrevista: Entrevista = {
    nome: '',
    dataHora: '',
    sequencia: 0,
  };
  submitted = false;
  debug = true;


  constructor(private entrevistaService: EntrevistaService) { }

  ngOnInit(): void {
  }

  saveEntrevista(): void {
    const data = {
      nome: this.entrevista.nome,
      dataHora: this.entrevista.dataHora,
      sequencia: this.entrevista.sequencia,
      entrevistador: this.entrevista.entrevistador,
      entrevistado: this.entrevista.entrevistado,
      enquete: this.entrevista.enquete,
      resposta: this.entrevista.resposta
    };

    this.entrevistaService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEntrevista(): void {
    this.submitted = false;
    this.debug = true;

    this.entrevista = {
      nome: '',
      dataHora: '',
      sequencia: 0,
    };
  }
}
