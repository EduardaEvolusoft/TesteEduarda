import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntrevistaComponent } from './list-entrevista.component';

describe('ListEntrevistaComponent', () => {
  let component: ListEntrevistaComponent;
  let fixture: ComponentFixture<ListEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
