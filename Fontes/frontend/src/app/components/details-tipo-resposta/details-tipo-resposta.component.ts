import { Component, OnInit } from '@angular/core';
import { TipoRespostaService } from 'src/app/services/tipo-resposta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoResposta } from 'src/app/models/tipo-resposta.model';

@Component({
  selector: 'app-details-tipo-resposta',
  templateUrl: './details-tipo-resposta.component.html',
  styleUrls: ['./details-tipo-resposta.component.css']
})
export class DetailsTipoRespostaComponent implements OnInit {

  tipoResposta: TipoResposta = {
    nome: ''
  };
  message = '';
  debug = true;


  constructor(
    private tipoRespostaService: TipoRespostaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTipoResposta(this.route.snapshot.params['id']);
  }

  getTipoResposta(id: string): void {
    this.tipoRespostaService.get(id)
      .subscribe(
        data => {
          this.tipoResposta = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTipoResposta(): void {
    this.message = '';

    this.tipoRespostaService.update(this.tipoResposta.id, this.tipoResposta)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade TipoRespostaEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTipoResposta(): void {
    this.tipoRespostaService.delete(this.tipoResposta.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/tipos-respostas']);
        },
        error => {
          console.log(error);
        });
  }
}
