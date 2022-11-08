import { Component, OnInit } from '@angular/core';
import { RespostaPergunta } from 'src/app/models/resposta-pergunta.model';
import { RespostaPerguntaService } from 'src/app/services/resposta-pergunta.service';

@Component({
  selector: 'app-add-resposta-pergunta',
  templateUrl: './add-resposta-pergunta.component.html',
  styleUrls: ['./add-resposta-pergunta.component.css']
})
export class AddRespostaPerguntaComponent implements OnInit {

  respostaPergunta: RespostaPergunta = {
    resposta: '',
  };
  submitted = false;
  debug = true;


  constructor(private respostaPerguntaService: RespostaPerguntaService) { }

  ngOnInit(): void {
  }

  saveRespostaPergunta(): void {
    const data = {
      resposta: this.respostaPergunta.resposta,
      pergunta: this.respostaPergunta.pergunta
    };

    this.respostaPerguntaService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRespostaPergunta(): void {
    this.submitted = false;
    this.debug = true;

    this.respostaPergunta = {
      resposta: '',
    };
  }
}
