import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntrevistadoAutorizado } from '../models/entrevistado-autorizado.model';

const baseUrl = 'http://localhost:8080/api/entrevistadosAutorizados';

@Injectable({
  providedIn: 'root'
})
export class EntrevistadoAutorizadoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EntrevistadoAutorizado[]> {
    return this.http.get<EntrevistadoAutorizado[]>(baseUrl);
  }

  get(id: any): Observable<EntrevistadoAutorizado> {
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
