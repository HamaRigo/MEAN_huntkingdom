import { TestBed } from '@angular/core/testing';

import { ServiceChienChasseService } from './service-chien-chasse.service';

describe('ServiceChienChasseService', () => {
  let service: ServiceChienChasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChienChasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
