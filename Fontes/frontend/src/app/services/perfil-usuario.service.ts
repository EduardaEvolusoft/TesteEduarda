import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilUsuario } from '../models/perfil-usuario.model';

const baseUrl = 'http://localhost:8080/api/perfilsUsuarios';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PerfilUsuario[]> {
    return this.http.get<PerfilUsuario[]>(baseUrl);
  }

  get(id: any): Observable<PerfilUsuario> {
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
