import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquete } from '../models/enquete.model';

const baseUrl = 'http://localhost:8080/api/enquetes';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Enquete[]> {
    return this.http.get<Enquete[]>(baseUrl);
  }

  get(id: any): Observable<Enquete> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(nome: any): Observable<Enquete[]> {
    return this.http.get<Enquete[]>(`${baseUrl}?nome=${nome}`);
  }
}
