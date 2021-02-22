import { TestBed } from '@angular/core/testing';

import { WaitProfileGuard } from './wait-profile.guard';

describe('WaitProfileGuard', () => {
  let guard: WaitProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WaitProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
