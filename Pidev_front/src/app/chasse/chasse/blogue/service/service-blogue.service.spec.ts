import { TestBed } from '@angular/core/testing';

import { ServiceBlogueService } from './service-blogue.service';

describe('ServiceBlogueService', () => {
  let service: ServiceBlogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBlogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
