import { TestBed } from '@angular/core/testing';

import { GuardaLoginService } from './guarda-login.service';

describe('GuardaLoginService', () => {
  let service: GuardaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
