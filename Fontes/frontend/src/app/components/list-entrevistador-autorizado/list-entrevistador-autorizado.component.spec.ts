import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntrevistadorAutorizadoComponent } from './list-entrevistador-autorizado.component';

describe('ListEntrevistadorAutorizadoComponent', () => {
  let component: ListEntrevistadorAutorizadoComponent;
  let fixture: ComponentFixture<ListEntrevistadorAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntrevistadorAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntrevistadorAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
