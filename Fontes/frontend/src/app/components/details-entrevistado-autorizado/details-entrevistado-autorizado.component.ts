import { Component, OnInit } from '@angular/core';
import { EntrevistadoAutorizadoService } from 'src/app/services/entrevistado-autorizado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrevistadoAutorizado } from 'src/app/models/entrevistado-autorizado.model';

@Component({
  selector: 'app-details-entrevistado-autorizado',
  templateUrl: './details-entrevistado-autorizado.component.html',
  styleUrls: ['./details-entrevistado-autorizado.component.css']
})
export class DetailsEntrevistadoAutorizadoComponent implements OnInit {

  entrevistadoAutorizado: EntrevistadoAutorizado = {
    tipoPermissao: ''
  };
  message = '';
  debug = true;


  constructor(
    private entrevistadoAutorizadoService: EntrevistadoAutorizadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEntrevistadoAutorizado(this.route.snapshot.params['id']);
  }

  getEntrevistadoAutorizado(id: string): void {
    this.entrevistadoAutorizadoService.get(id)
      .subscribe(
        data => {
          this.entrevistadoAutorizado = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEntrevistadoAutorizado(): void {
    this.message = '';

    this.entrevistadoAutorizadoService.update(this.entrevistadoAutorizado.id, this.entrevistadoAutorizado)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade EntrevistadoAutorizadoEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEntrevistadoAutorizado(): void {
    this.entrevistadoAutorizadoService.delete(this.entrevistadoAutorizado.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/entrevistados-autorizados']);
        },
        error => {
          console.log(error);
        });
  }
}
