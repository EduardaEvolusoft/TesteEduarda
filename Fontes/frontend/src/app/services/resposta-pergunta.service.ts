import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespostaPergunta } from '../models/resposta-pergunta.model';

const baseUrl = 'http://localhost:8080/api/respostasPerguntas';

@Injectable({
  providedIn: 'root'
})
export class RespostaPerguntaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RespostaPergunta[]> {
    return this.http.get<RespostaPergunta[]>(baseUrl);
  }

  get(id: any): Observable<RespostaPergunta> {
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
