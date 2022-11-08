import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrevista } from '../models/entrevista.model';

const baseUrl = 'http://localhost:8080/api/entrevistas';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Entrevista[]> {
    return this.http.get<Entrevista[]>(baseUrl);
  }

  get(id: any): Observable<Entrevista> {
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
}
