import { TestBed } from '@angular/core/testing';

import { SaladService } from './salad.service';

describe('SaladService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaladService = TestBed.get(SaladService);
    expect(service).toBeTruthy();
  });
});
