import { Component, OnInit } from '@angular/core';
import { EntrevistadorAutorizadoService } from 'src/app/services/entrevistador-autorizado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrevistadorAutorizado } from 'src/app/models/entrevistador-autorizado.model';

@Component({
  selector: 'app-details-entrevistador-autorizado',
  templateUrl: './details-entrevistador-autorizado.component.html',
  styleUrls: ['./details-entrevistador-autorizado.component.css']
})
export class DetailsEntrevistadorAutorizadoComponent implements OnInit {

  entrevistadorAutorizado: EntrevistadorAutorizado = {
    tipoPermissao: ''
  };
  message = '';
  debug = true;


  constructor(
    private entrevistadorAutorizadoService: EntrevistadorAutorizadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEntrevistadorAutorizado(this.route.snapshot.params['id']);
  }

  getEntrevistadorAutorizado(id: string): void {
    this.entrevistadorAutorizadoService.get(id)
      .subscribe(
        data => {
          this.entrevistadorAutorizado = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEntrevistadorAutorizado(): void {
    this.message = '';

    this.entrevistadorAutorizadoService.update(this.entrevistadorAutorizado.id, this.entrevistadorAutorizado)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade EntrevistadorAutorizadoEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEntrevistadorAutorizado(): void {
    this.entrevistadorAutorizadoService.delete(this.entrevistadorAutorizado.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/entrevistadores-autorizados']);
        },
        error => {
          console.log(error);
        });
  }
}
