import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrevistadorAutorizadoComponent } from './add-entrevistador-autorizado.component';

describe('AddEntrevistadorAutorizadoComponent', () => {
  let component: AddEntrevistadorAutorizadoComponent;
  let fixture: ComponentFixture<AddEntrevistadorAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntrevistadorAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntrevistadorAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
