import { Component, OnInit } from '@angular/core';
import { Enquete } from 'src/app/models/enquete.model';
import { EnqueteService } from 'src/app/services/enquete.service';

@Component({
  selector: 'app-list-enquete',
  templateUrl: './list-enquete.component.html',
  styleUrls: ['./list-enquete.component.css']
})
export class ListEnqueteComponent implements OnInit {

  enqueteCollection?: Enquete[];
  currentEnquete: Enquete = {};
  currentIndex = -1;
  debug = true;
  nome = '';

  constructor(private enqueteService: EnqueteService) { }

  ngOnInit(): void {
    this.retrieveEnquetes();
  }

  retrieveEnquetes(): void {
    this.enqueteService.getAll()
      .subscribe(
        data => {
          this.enqueteCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEnquetes();
    this.currentEnquete = {};
    this.currentIndex = -1;
  }

  setActiveEnquete(enquete: Enquete, index: number): void {
    this.currentEnquete = enquete;
    this.currentIndex = index;
  }

  removeAllEnquetes(): void {
    this.enqueteService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentEnquete = {};
    this.currentIndex = -1;

    this.enqueteService.findByNome(this.nome)
      .subscribe(
        data => {
          this.enqueteCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
