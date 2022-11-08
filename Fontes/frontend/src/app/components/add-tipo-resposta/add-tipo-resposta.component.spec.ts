import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoRespostaComponent } from './add-tipo-resposta.component';

describe('AddTipoRespostaComponent', () => {
  let component: AddTipoRespostaComponent;
  let fixture: ComponentFixture<AddTipoRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoRespostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipoRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
