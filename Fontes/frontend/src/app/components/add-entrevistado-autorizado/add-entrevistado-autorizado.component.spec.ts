import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrevistadoAutorizadoComponent } from './add-entrevistado-autorizado.component';

describe('AddEntrevistadoAutorizadoComponent', () => {
  let component: AddEntrevistadoAutorizadoComponent;
  let fixture: ComponentFixture<AddEntrevistadoAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntrevistadoAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntrevistadoAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
