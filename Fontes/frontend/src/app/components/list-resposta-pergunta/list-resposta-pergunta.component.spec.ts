import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRespostaPerguntaComponent } from './list-resposta-pergunta.component';

describe('ListRespostaPerguntaComponent', () => {
  let component: ListRespostaPerguntaComponent;
  let fixture: ComponentFixture<ListRespostaPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRespostaPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRespostaPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
