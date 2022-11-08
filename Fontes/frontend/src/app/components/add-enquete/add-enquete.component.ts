import { Component, OnInit } from '@angular/core';
import { Enquete } from 'src/app/models/enquete.model';
import { EnqueteService } from 'src/app/services/enquete.service';

@Component({
  selector: 'app-add-enquete',
  templateUrl: './add-enquete.component.html',
  styleUrls: ['./add-enquete.component.css']
})
export class AddEnqueteComponent implements OnInit {

  enquete: Enquete = {
    nome: '',
    ativa: false,
    dataHoraInicio: '',
    dataHoraFinal: '',
    entrevistadorInsereResposta: false,
    entrevistadoInsereResposta: false,
  };
  submitted = false;
  debug = true;


  constructor(private enqueteService: EnqueteService) { }

  ngOnInit(): void {
  }

  saveEnquete(): void {
    const data = {
      nome: this.enquete.nome,
      ativa: this.enquete.ativa,
      dataHoraInicio: this.enquete.dataHoraInicio,
      dataHoraFinal: this.enquete.dataHoraFinal,
      pergunta: this.enquete.pergunta,
      entrevistadorInsereResposta: this.enquete.entrevistadorInsereResposta,
      entrevistadoInsereResposta: this.enquete.entrevistadoInsereResposta,
      entrevistadorAutorizado: this.enquete.entrevistadorAutorizado,
      entrevistadoAutorizado: this.enquete.entrevistadoAutorizado
    };

    this.enqueteService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEnquete(): void {
    this.submitted = false;
    this.debug = true;

    this.enquete = {
      nome: '',
      ativa: false,
      dataHoraInicio: '',
      dataHoraFinal: '',
      entrevistadorInsereResposta: false,
      entrevistadoInsereResposta: false,
    };
  }
}
