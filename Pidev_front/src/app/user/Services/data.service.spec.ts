import { TestBed } from '@angular/core/testing';

import { DataService } from './Data.service';

describe('DataservicesService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
