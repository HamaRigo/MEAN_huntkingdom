import { TestBed } from '@angular/core/testing';

import { ServiceTrucAstuceService } from './service-truc-astuce.service';

describe('ServiceTrucAstuceService', () => {
  let service: ServiceTrucAstuceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTrucAstuceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
