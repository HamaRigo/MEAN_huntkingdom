import { TestBed } from '@angular/core/testing';

import { ServiceCommentaireService } from './service-commentaire.service';

describe('ServiceCommentaireService', () => {
  let service: ServiceCommentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCommentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
