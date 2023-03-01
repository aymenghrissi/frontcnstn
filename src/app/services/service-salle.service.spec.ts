import { TestBed } from '@angular/core/testing';

import { ServiceSalleService } from './service-salle.service';

describe('ServiceSalleService', () => {
  let service: ServiceSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
