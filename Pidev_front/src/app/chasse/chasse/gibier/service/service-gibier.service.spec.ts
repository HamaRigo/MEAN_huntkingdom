import { TestBed } from '@angular/core/testing';

import { ServiceGibierService } from './service-gibier.service';

describe('ServiceGibierService', () => {
  let service: ServiceGibierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGibierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
