import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateGuardService } from './activate-guard.guard';

describe('ActivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateGuardService]
    });
  });

  it('should ...', inject([ActivateGuardService], (guard: ActivateGuardService) => {
    expect(guard).toBeTruthy();
  }));
});
