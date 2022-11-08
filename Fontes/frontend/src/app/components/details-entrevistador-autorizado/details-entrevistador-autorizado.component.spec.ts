import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntrevistadorAutorizadoComponent } from './details-entrevistador-autorizado.component';

describe('DetailsEntrevistadorAutorizadoComponent', () => {
  let component: DetailsEntrevistadorAutorizadoComponent;
  let fixture: ComponentFixture<DetailsEntrevistadorAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEntrevistadorAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEntrevistadorAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
