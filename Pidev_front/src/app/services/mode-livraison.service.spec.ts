import { TestBed } from '@angular/core/testing';

import { ModeLivraisonService } from './mode-livraison.service';

describe('ModeLivraisonService', () => {
  let service: ModeLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
