import { TestBed } from '@angular/core/testing';

import { ServiceLocalisationService } from './service-localisation.service';

describe('ServiceLocalisationService', () => {
  let service: ServiceLocalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLocalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
