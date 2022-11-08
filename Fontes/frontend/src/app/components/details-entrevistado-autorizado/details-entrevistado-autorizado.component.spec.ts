import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntrevistadoAutorizadoComponent } from './details-entrevistado-autorizado.component';

describe('DetailsEntrevistadoAutorizadoComponent', () => {
  let component: DetailsEntrevistadoAutorizadoComponent;
  let fixture: ComponentFixture<DetailsEntrevistadoAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEntrevistadoAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEntrevistadoAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
