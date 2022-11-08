import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pergunta } from '../models/pergunta.model';

const baseUrl = 'http://localhost:8080/api/perguntas';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(baseUrl);
  }

  get(id: any): Observable<Pergunta> {
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

  findByCodigoPergunta(codigoPergunta: any): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(`${baseUrl}?codigoPergunta=${codigoPergunta}`);
  }
}
