import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnqueteComponent } from './add-enquete.component';

describe('AddEnqueteComponent', () => {
  let component: AddEnqueteComponent;
  let fixture: ComponentFixture<AddEnqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnqueteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
