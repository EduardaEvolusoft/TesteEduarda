import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntrevistaComponent } from './details-entrevista.component';

describe('DetailsEntrevistaComponent', () => {
  let component: DetailsEntrevistaComponent;
  let fixture: ComponentFixture<DetailsEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
