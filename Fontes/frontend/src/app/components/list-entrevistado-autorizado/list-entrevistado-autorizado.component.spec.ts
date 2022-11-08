import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntrevistadoAutorizadoComponent } from './list-entrevistado-autorizado.component';

describe('ListEntrevistadoAutorizadoComponent', () => {
  let component: ListEntrevistadoAutorizadoComponent;
  let fixture: ComponentFixture<ListEntrevistadoAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntrevistadoAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntrevistadoAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
