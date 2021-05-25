import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemHorizontalComponent } from './listagem-horizontal.component';

describe('ListagemHorizontalComponent', () => {
  let component: ListagemHorizontalComponent;
  let fixture: ComponentFixture<ListagemHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
