import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnqueteComponent } from './list-enquete.component';

describe('ListEnqueteComponent', () => {
  let component: ListEnqueteComponent;
  let fixture: ComponentFixture<ListEnqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnqueteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
