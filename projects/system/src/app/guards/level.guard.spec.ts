import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { levelGuard } from './level.guard';

describe('levelGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => levelGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
