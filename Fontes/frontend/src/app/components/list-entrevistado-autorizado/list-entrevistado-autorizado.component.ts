import { Component, OnInit } from '@angular/core';
import { EntrevistadoAutorizado } from 'src/app/models/entrevistado-autorizado.model';
import { EntrevistadoAutorizadoService } from 'src/app/services/entrevistado-autorizado.service';

@Component({
  selector: 'app-list-entrevistado-autorizado',
  templateUrl: './list-entrevistado-autorizado.component.html',
  styleUrls: ['./list-entrevistado-autorizado.component.css']
})
export class ListEntrevistadoAutorizadoComponent implements OnInit {

  entrevistadoAutorizadoCollection?: EntrevistadoAutorizado[];
  currentEntrevistadoAutorizado: EntrevistadoAutorizado = {};
  currentIndex = -1;
  debug = true;

  constructor(private entrevistadoAutorizadoService: EntrevistadoAutorizadoService) { }

  ngOnInit(): void {
    this.retrieveEntrevistadosAutorizados();
  }

  retrieveEntrevistadosAutorizados(): void {
    this.entrevistadoAutorizadoService.getAll()
      .subscribe(
        data => {
          this.entrevistadoAutorizadoCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEntrevistadosAutorizados();
    this.currentEntrevistadoAutorizado = {};
    this.currentIndex = -1;
  }

  setActiveEntrevistadoAutorizado(entrevistadoAutorizado: EntrevistadoAutorizado, index: number): void {
    this.currentEntrevistadoAutorizado = entrevistadoAutorizado;
    this.currentIndex = index;
  }

  removeAllEntrevistadosAutorizados(): void {
    this.entrevistadoAutorizadoService.deleteAll()
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
