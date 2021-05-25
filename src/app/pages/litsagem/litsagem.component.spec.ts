import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitsagemComponent } from './litsagem.component';

describe('LitsagemComponent', () => {
  let component: LitsagemComponent;
  let fixture: ComponentFixture<LitsagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitsagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitsagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
