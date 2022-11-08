import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerguntaComponent } from './list-pergunta.component';

describe('ListPerguntaComponent', () => {
  let component: ListPerguntaComponent;
  let fixture: ComponentFixture<ListPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
