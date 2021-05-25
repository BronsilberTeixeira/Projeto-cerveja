/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CervejasService } from './cervejas.service';

describe('Service: Cervejas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CervejasService]
    });
  });

  it('should ...', inject([CervejasService], (service: CervejasService) => {
    expect(service).toBeTruthy();
  }));
});
