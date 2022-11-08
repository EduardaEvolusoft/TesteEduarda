import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnqueteComponent } from './details-enquete.component';

describe('DetailsEnqueteComponent', () => {
  let component: DetailsEnqueteComponent;
  let fixture: ComponentFixture<DetailsEnqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEnqueteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
