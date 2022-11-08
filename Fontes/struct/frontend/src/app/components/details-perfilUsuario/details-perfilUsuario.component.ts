import { Component, OnInit } from '@angular/core';
import { PerfilUsuarioService } from 'src/app/services/perfilUsuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from 'src/app/models/perfilUsuario.model';

@Component({
  selector: 'app-details-perfilUsuario',
  templateUrl: './details-perfilUsuario.component.html',
  styleUrls: ['./details-perfilUsuario.component.css']
})
export class DetailsPerfilUsuarioComponent implements OnInit {

  perfilUsuario: PerfilUsuario = {
    tipo: ''
  };
  message = '';
  debug = true;


  constructor(
    private perfilUsuarioService: PerfilUsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPerfilUsuario(this.route.snapshot.params['id']);
  }

  getPerfilUsuario(id: string): void {
    this.perfilUsuarioService.get(id)
      .subscribe(
        data => {
          this.perfilUsuario = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePerfilUsuario(): void {
    this.message = '';

    this.perfilUsuarioService.update(this.perfilUsuario.id, this.perfilUsuario)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade PerfilUsuarioEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deletePerfilUsuario(): void {
    this.perfilUsuarioService.delete(this.perfilUsuario.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/perfils-usuarios']);
        },
        error => {
          console.log(error);
        });
  }
}
