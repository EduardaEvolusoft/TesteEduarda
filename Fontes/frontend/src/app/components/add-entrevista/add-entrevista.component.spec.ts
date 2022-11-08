import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrevistaComponent } from './add-entrevista.component';

describe('AddEntrevistaComponent', () => {
  let component: AddEntrevistaComponent;
  let fixture: ComponentFixture<AddEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
