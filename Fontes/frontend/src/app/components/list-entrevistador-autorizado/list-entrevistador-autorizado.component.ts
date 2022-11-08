import { Component, OnInit } from '@angular/core';
import { EntrevistadorAutorizado } from 'src/app/models/entrevistador-autorizado.model';
import { EntrevistadorAutorizadoService } from 'src/app/services/entrevistador-autorizado.service';

@Component({
  selector: 'app-list-entrevistador-autorizado',
  templateUrl: './list-entrevistador-autorizado.component.html',
  styleUrls: ['./list-entrevistador-autorizado.component.css']
})
export class ListEntrevistadorAutorizadoComponent implements OnInit {

  entrevistadorAutorizadoCollection?: EntrevistadorAutorizado[];
  currentEntrevistadorAutorizado: EntrevistadorAutorizado = {};
  currentIndex = -1;
  debug = true;

  constructor(private entrevistadorAutorizadoService: EntrevistadorAutorizadoService) { }

  ngOnInit(): void {
    this.retrieveEntrevistadoresAutorizados();
  }

  retrieveEntrevistadoresAutorizados(): void {
    this.entrevistadorAutorizadoService.getAll()
      .subscribe(
        data => {
          this.entrevistadorAutorizadoCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEntrevistadoresAutorizados();
    this.currentEntrevistadorAutorizado = {};
    this.currentIndex = -1;
  }

  setActiveEntrevistadorAutorizado(entrevistadorAutorizado: EntrevistadorAutorizado, index: number): void {
    this.currentEntrevistadorAutorizado = entrevistadorAutorizado;
    this.currentIndex = index;
  }

  removeAllEntrevistadoresAutorizados(): void {
    this.entrevistadorAutorizadoService.deleteAll()
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
