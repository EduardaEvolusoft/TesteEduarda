import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPerguntaComponent } from './details-pergunta.component';

describe('DetailsPerguntaComponent', () => {
  let component: DetailsPerguntaComponent;
  let fixture: ComponentFixture<DetailsPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
