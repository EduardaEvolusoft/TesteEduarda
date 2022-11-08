import { Component, OnInit } from '@angular/core';
import { RespostaPergunta } from 'src/app/models/resposta-pergunta.model';
import { RespostaPerguntaService } from 'src/app/services/resposta-pergunta.service';

@Component({
  selector: 'app-list-resposta-pergunta',
  templateUrl: './list-resposta-pergunta.component.html',
  styleUrls: ['./list-resposta-pergunta.component.css']
})
export class ListRespostaPerguntaComponent implements OnInit {

  respostaPerguntaCollection?: RespostaPergunta[];
  currentRespostaPergunta: RespostaPergunta = {};
  currentIndex = -1;
  debug = true;

  constructor(private respostaPerguntaService: RespostaPerguntaService) { }

  ngOnInit(): void {
    this.retrieveRespostasPerguntas();
  }

  retrieveRespostasPerguntas(): void {
    this.respostaPerguntaService.getAll()
      .subscribe(
        data => {
          this.respostaPerguntaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRespostasPerguntas();
    this.currentRespostaPergunta = {};
    this.currentIndex = -1;
  }

  setActiveRespostaPergunta(respostaPergunta: RespostaPergunta, index: number): void {
    this.currentRespostaPergunta = respostaPergunta;
    this.currentIndex = index;
  }

  removeAllRespostasPerguntas(): void {
    this.respostaPerguntaService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
