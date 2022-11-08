import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPerfilUsuarioComponent } from './details-perfil-usuario.component';

describe('DetailsPerfilUsuarioComponent', () => {
  let component: DetailsPerfilUsuarioComponent;
  let fixture: ComponentFixture<DetailsPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
