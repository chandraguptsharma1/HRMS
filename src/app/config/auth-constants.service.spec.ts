import { TestBed } from '@angular/core/testing';

import { AuthConstantsService } from './auth-constants.service';

describe('AuthConstantsService', () => {
  let service: AuthConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
