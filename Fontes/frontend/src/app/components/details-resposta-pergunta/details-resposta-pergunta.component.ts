import { Component, OnInit } from '@angular/core';
import { RespostaPerguntaService } from 'src/app/services/resposta-pergunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RespostaPergunta } from 'src/app/models/resposta-pergunta.model';

@Component({
  selector: 'app-details-resposta-pergunta',
  templateUrl: './details-resposta-pergunta.component.html',
  styleUrls: ['./details-resposta-pergunta.component.css']
})
export class DetailsRespostaPerguntaComponent implements OnInit {

  respostaPergunta: RespostaPergunta = {
    resposta: '',
  };
  message = '';
  debug = true;


  constructor(
    private respostaPerguntaService: RespostaPerguntaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRespostaPergunta(this.route.snapshot.params['id']);
  }

  getRespostaPergunta(id: string): void {
    this.respostaPerguntaService.get(id)
      .subscribe(
        data => {
          this.respostaPergunta = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateRespostaPergunta(): void {
    this.message = '';

    this.respostaPerguntaService.update(this.respostaPergunta.id, this.respostaPergunta)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade RespostaPerguntaEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRespostaPergunta(): void {
    this.respostaPerguntaService.delete(this.respostaPergunta.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/respostas-perguntas']);
        },
        error => {
          console.log(error);
        });
  }
}
