import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTipoRespostaComponent } from './details-tipo-resposta.component';

describe('DetailsTipoRespostaComponent', () => {
  let component: DetailsTipoRespostaComponent;
  let fixture: ComponentFixture<DetailsTipoRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTipoRespostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTipoRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
