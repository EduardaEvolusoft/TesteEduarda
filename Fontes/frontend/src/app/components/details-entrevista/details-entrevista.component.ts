import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from 'src/app/services/entrevista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrevista } from 'src/app/models/entrevista.model';

@Component({
  selector: 'app-details-entrevista',
  templateUrl: './details-entrevista.component.html',
  styleUrls: ['./details-entrevista.component.css']
})
export class DetailsEntrevistaComponent implements OnInit {

  entrevista: Entrevista = {
    nome: '',
    dataHora: '',
    sequencia: 0,
  };
  message = '';
  debug = true;


  constructor(
    private entrevistaService: EntrevistaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEntrevista(this.route.snapshot.params['id']);
  }

  getEntrevista(id: string): void {
    this.entrevistaService.get(id)
      .subscribe(
        data => {
          this.entrevista = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEntrevista(): void {
    this.message = '';

    this.entrevistaService.update(this.entrevista.id, this.entrevista)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade EntrevistaEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEntrevista(): void {
    this.entrevistaService.delete(this.entrevista.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/entrevistas']);
        },
        error => {
          console.log(error);
        });
  }
}
