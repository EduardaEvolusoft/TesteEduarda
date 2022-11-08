import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntrevistadorAutorizado } from '../models/entrevistador-autorizado.model';

const baseUrl = 'http://localhost:8080/api/entrevistadoresAutorizados';

@Injectable({
  providedIn: 'root'
})
export class EntrevistadorAutorizadoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EntrevistadorAutorizado[]> {
    return this.http.get<EntrevistadorAutorizado[]>(baseUrl);
  }

  get(id: any): Observable<EntrevistadorAutorizado> {
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
