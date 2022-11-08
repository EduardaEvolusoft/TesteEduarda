import { Component, OnInit } from '@angular/core';
import { Pergunta } from 'src/app/models/pergunta.model';
import { PerguntaService } from 'src/app/services/pergunta.service';

@Component({
  selector: 'app-list-pergunta',
  templateUrl: './list-pergunta.component.html',
  styleUrls: ['./list-pergunta.component.css']
})
export class ListPerguntaComponent implements OnInit {

  perguntaCollection?: Pergunta[];
  currentPergunta: Pergunta = {};
  currentIndex = -1;
  debug = true;
  codigoPergunta = 0;

  constructor(private perguntaService: PerguntaService) { }

  ngOnInit(): void {
    this.retrievePerguntas();
  }

  retrievePerguntas(): void {
    this.perguntaService.getAll()
      .subscribe(
        data => {
          this.perguntaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePerguntas();
    this.currentPergunta = {};
    this.currentIndex = -1;
  }

  setActivePergunta(pergunta: Pergunta, index: number): void {
    this.currentPergunta = pergunta;
    this.currentIndex = index;
  }

  removeAllPerguntas(): void {
    this.perguntaService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchCodigoPergunta(): void {
    this.currentPergunta = {};
    this.currentIndex = -1;

    this.perguntaService.findByCodigoPergunta(this.codigoPergunta)
      .subscribe(
        data => {
          this.perguntaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
