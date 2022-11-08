import { Component, OnInit } from '@angular/core';
import { TipoResposta } from 'src/app/models/tipo-resposta.model';
import { TipoRespostaService } from 'src/app/services/tipo-resposta.service';

@Component({
  selector: 'app-list-tipo-resposta',
  templateUrl: './list-tipo-resposta.component.html',
  styleUrls: ['./list-tipo-resposta.component.css']
})
export class ListTipoRespostaComponent implements OnInit {

  tipoRespostaCollection?: TipoResposta[];
  currentTipoResposta: TipoResposta = {};
  currentIndex = -1;
  debug = true;

  constructor(private tipoRespostaService: TipoRespostaService) { }

  ngOnInit(): void {
    this.retrieveTiposRespostas();
  }

  retrieveTiposRespostas(): void {
    this.tipoRespostaService.getAll()
      .subscribe(
        data => {
          this.tipoRespostaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTiposRespostas();
    this.currentTipoResposta = {};
    this.currentIndex = -1;
  }

  setActiveTipoResposta(tipoResposta: TipoResposta, index: number): void {
    this.currentTipoResposta = tipoResposta;
    this.currentIndex = index;
  }

  removeAllTiposRespostas(): void {
    this.tipoRespostaService.deleteAll()
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
