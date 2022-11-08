import { Component, OnInit } from '@angular/core';
import { Pergunta } from 'src/app/models/pergunta.model';
import { PerguntaService } from 'src/app/services/pergunta.service';

@Component({
  selector: 'app-add-pergunta',
  templateUrl: './add-pergunta.component.html',
  styleUrls: ['./add-pergunta.component.css']
})
export class AddPerguntaComponent implements OnInit {

  pergunta: Pergunta = {
    codigoPergunta: 0,
    sequenciaFormulario: 0,
    frase: '',
    textoExplicativo: '',
    obrigatoria: false
  };
  submitted = false;
  debug = true;


  constructor(private perguntaService: PerguntaService) { }

  ngOnInit(): void {
  }

  savePergunta(): void {
    const data = {
      codigoPergunta: this.pergunta.codigoPergunta,
      sequenciaFormulario: this.pergunta.sequenciaFormulario,
      frase: this.pergunta.frase,
      textoExplicativo: this.pergunta.textoExplicativo,
      tipoResposta: this.pergunta.tipoResposta,
      obrigatoria: this.pergunta.obrigatoria
    };

    this.perguntaService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPergunta(): void {
    this.submitted = false;
    this.debug = true;

    this.pergunta = {
      codigoPergunta: 0,
      sequenciaFormulario: 0,
      frase: '',
      textoExplicativo: '',
      obrigatoria: false
    };
  }
}
