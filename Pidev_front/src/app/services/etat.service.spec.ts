import { TestBed } from '@angular/core/testing';

import { EtatService } from './etat.service';

describe('EtatService', () => {
  let service: EtatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
