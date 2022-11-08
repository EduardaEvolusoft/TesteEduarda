import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoResposta } from '../models/tipo-resposta.model';

const baseUrl = 'http://localhost:8080/api/tiposRespostas';

@Injectable({
  providedIn: 'root'
})
export class TipoRespostaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TipoResposta[]> {
    return this.http.get<TipoResposta[]>(baseUrl);
  }

  get(id: any): Observable<TipoResposta> {
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
