import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaRamdomComponent } from './cerveja-ramdom.component';

describe('CervejaRamdomComponent', () => {
  let component: CervejaRamdomComponent;
  let fixture: ComponentFixture<CervejaRamdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervejaRamdomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaRamdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
