import { TestBed } from '@angular/core/testing';

import { ServiceDemandeService } from './service-demande.service';

describe('ServiceDemandeService', () => {
  let service: ServiceDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
