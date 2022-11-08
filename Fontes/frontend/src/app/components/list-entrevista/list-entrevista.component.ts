import { Component, OnInit } from '@angular/core';
import { Entrevista } from 'src/app/models/entrevista.model';
import { EntrevistaService } from 'src/app/services/entrevista.service';

@Component({
  selector: 'app-list-entrevista',
  templateUrl: './list-entrevista.component.html',
  styleUrls: ['./list-entrevista.component.css']
})
export class ListEntrevistaComponent implements OnInit {

  entrevistaCollection?: Entrevista[];
  currentEntrevista: Entrevista = {};
  currentIndex = -1;
  debug = true;

  constructor(private entrevistaService: EntrevistaService) { }

  ngOnInit(): void {
    this.retrieveEntrevistas();
  }

  retrieveEntrevistas(): void {
    this.entrevistaService.getAll()
      .subscribe(
        data => {
          this.entrevistaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEntrevistas();
    this.currentEntrevista = {};
    this.currentIndex = -1;
  }

  setActiveEntrevista(entrevista: Entrevista, index: number): void {
    this.currentEntrevista = entrevista;
    this.currentIndex = index;
  }

  removeAllEntrevistas(): void {
    this.entrevistaService.deleteAll()
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
