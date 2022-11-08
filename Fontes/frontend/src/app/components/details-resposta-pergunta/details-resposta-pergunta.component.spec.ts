import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRespostaPerguntaComponent } from './details-resposta-pergunta.component';

describe('DetailsRespostaPerguntaComponent', () => {
  let component: DetailsRespostaPerguntaComponent;
  let fixture: ComponentFixture<DetailsRespostaPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRespostaPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRespostaPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
