import { Component, OnInit } from '@angular/core';
import { EnqueteService } from 'src/app/services/enquete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquete } from 'src/app/models/enquete.model';

@Component({
  selector: 'app-details-enquete',
  templateUrl: './details-enquete.component.html',
  styleUrls: ['./details-enquete.component.css']
})
export class DetailsEnqueteComponent implements OnInit {

  enquete: Enquete = {
    nome: '',
    ativa: false,
    dataHoraInicio: '',
    dataHoraFinal: '',
    entrevistadorInsereResposta: false,
    entrevistadoInsereResposta: false,
  };
  message = '';
  debug = true;


  constructor(
    private enqueteService: EnqueteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEnquete(this.route.snapshot.params['id']);
  }

  getEnquete(id: string): void {
    this.enqueteService.get(id)
      .subscribe(
        data => {
          this.enquete = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAtiva(status: boolean): void {
    const data = {
      nome: this.enquete.nome,
      ativa: status,
      dataHoraInicio: this.enquete.dataHoraInicio,
      dataHoraFinal: this.enquete.dataHoraFinal,
      pergunta: this.enquete.pergunta,
      entrevistadorInsereResposta: this.enquete.entrevistadorInsereResposta,
      entrevistadoInsereResposta: this.enquete.entrevistadoInsereResposta,
      entrevistadorAutorizado: this.enquete.entrevistadorAutorizado,
      entrevistadoAutorizado: this.enquete.entrevistadoAutorizado
    };

    this.message = '';

    this.enqueteService.update(this.enquete.id, data)
      .subscribe(
        response => {
          this.enquete.ativa = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O ativa foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateEntrevistadorInsereResposta(status: boolean): void {
    const data = {
      nome: this.enquete.nome,
      ativa: this.enquete.ativa,
      dataHoraInicio: this.enquete.dataHoraInicio,
      dataHoraFinal: this.enquete.dataHoraFinal,
      pergunta: this.enquete.pergunta,
      entrevistadorInsereResposta: status,
      entrevistadoInsereResposta: this.enquete.entrevistadoInsereResposta,
      entrevistadorAutorizado: this.enquete.entrevistadorAutorizado,
      entrevistadoAutorizado: this.enquete.entrevistadoAutorizado
    };

    this.message = '';

    this.enqueteService.update(this.enquete.id, data)
      .subscribe(
        response => {
          this.enquete.entrevistadorInsereResposta = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O entrevistadorInsereResposta foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateEntrevistadoInsereResposta(status: boolean): void {
    const data = {
      nome: this.enquete.nome,
      ativa: this.enquete.ativa,
      dataHoraInicio: this.enquete.dataHoraInicio,
      dataHoraFinal: this.enquete.dataHoraFinal,
      pergunta: this.enquete.pergunta,
      entrevistadorInsereResposta: this.enquete.entrevistadorInsereResposta,
      entrevistadoInsereResposta: status,
      entrevistadorAutorizado: this.enquete.entrevistadorAutorizado,
      entrevistadoAutorizado: this.enquete.entrevistadoAutorizado
    };

    this.message = '';

    this.enqueteService.update(this.enquete.id, data)
      .subscribe(
        response => {
          this.enquete.entrevistadoInsereResposta = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O entrevistadoInsereResposta foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateEnquete(): void {
    this.message = '';

    this.enqueteService.update(this.enquete.id, this.enquete)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade EnqueteEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEnquete(): void {
    this.enqueteService.delete(this.enquete.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/enquetes']);
        },
        error => {
          console.log(error);
        });
  }
}
