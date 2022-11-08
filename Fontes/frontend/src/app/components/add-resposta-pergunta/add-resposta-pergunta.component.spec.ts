import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRespostaPerguntaComponent } from './add-resposta-pergunta.component';

describe('AddRespostaPerguntaComponent', () => {
  let component: AddRespostaPerguntaComponent;
  let fixture: ComponentFixture<AddRespostaPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRespostaPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRespostaPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
