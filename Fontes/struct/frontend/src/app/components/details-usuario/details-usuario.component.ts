import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-details-usuario',
  templateUrl: './details-usuario.component.html',
  styleUrls: ['./details-usuario.component.css']
})
export class DetailsUsuarioComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    senha: '',
    email: '',
  };
  message = '';
  debug = true;


  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id: string): void {
    this.usuarioService.get(id)
      .subscribe(
        data => {
          this.usuario = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateUsuario(): void {
    this.message = '';

    this.usuarioService.update(this.usuario.id, this.usuario)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade UsuarioEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteUsuario(): void {
    this.usuarioService.delete(this.usuario.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/usuarios']);
        },
        error => {
          console.log(error);
        });
  }
}
