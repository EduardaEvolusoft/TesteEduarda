import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/services/pergunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pergunta } from 'src/app/models/pergunta.model';

@Component({
  selector: 'app-details-pergunta',
  templateUrl: './details-pergunta.component.html',
  styleUrls: ['./details-pergunta.component.css']
})
export class DetailsPerguntaComponent implements OnInit {

  pergunta: Pergunta = {
    codigoPergunta: 0,
    sequenciaFormulario: 0,
    frase: '',
    textoExplicativo: '',
    obrigatoria: false
  };
  message = '';
  debug = true;


  constructor(
    private perguntaService: PerguntaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPergunta(this.route.snapshot.params['id']);
  }

  getPergunta(id: string): void {
    this.perguntaService.get(id)
      .subscribe(
        data => {
          this.pergunta = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateObrigatoria(status: boolean): void {
    const data = {
      codigoPergunta: this.pergunta.codigoPergunta,
      sequenciaFormulario: this.pergunta.sequenciaFormulario,
      frase: this.pergunta.frase,
      textoExplicativo: this.pergunta.textoExplicativo,
      tipoResposta: this.pergunta.tipoResposta,
      obrigatoria: status
    };

    this.message = '';

    this.perguntaService.update(this.pergunta.id, data)
      .subscribe(
        response => {
          this.pergunta.obrigatoria = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O obrigatoria foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updatePergunta(): void {
    this.message = '';

    this.perguntaService.update(this.pergunta.id, this.pergunta)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade PerguntaEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deletePergunta(): void {
    this.perguntaService.delete(this.pergunta.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/perguntas']);
        },
        error => {
          console.log(error);
        });
  }
}
