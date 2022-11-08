import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoRespostaComponent } from './list-tipo-resposta.component';

describe('ListTipoRespostaComponent', () => {
  let component: ListTipoRespostaComponent;
  let fixture: ComponentFixture<ListTipoRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoRespostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTipoRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
