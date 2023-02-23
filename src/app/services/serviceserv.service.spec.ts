import { TestBed } from '@angular/core/testing';

import { ServiceservService } from './serviceserv.service';

describe('ServiceservService', () => {
  let service: ServiceservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
