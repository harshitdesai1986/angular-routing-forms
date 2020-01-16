import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateChildGuardService } from './activate-child-guard.guard';

describe('ActivateChildGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateChildGuardService]
    });
  });

  it('should ...', inject([ActivateChildGuardService], (guard: ActivateChildGuardService) => {
    expect(guard).toBeTruthy();
  }));
});
