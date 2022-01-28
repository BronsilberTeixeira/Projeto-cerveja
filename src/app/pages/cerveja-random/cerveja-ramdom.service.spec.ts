import { TestBed } from '@angular/core/testing';

import { CervejaRamdomService } from './cerveja-ramdom.service';

describe('CervejaRamdomService', () => {
  let service: CervejaRamdomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CervejaRamdomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
