import { TestBed } from '@angular/core/testing';

import { ServicereservationService } from './servicereservation.service';

describe('ServicereservationService', () => {
  let service: ServicereservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicereservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
