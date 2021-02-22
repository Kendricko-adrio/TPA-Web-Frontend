import { TestBed } from '@angular/core/testing';

import { GetAuthGuard } from './get-auth.guard';

describe('GetAuthGuard', () => {
  let guard: GetAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GetAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
