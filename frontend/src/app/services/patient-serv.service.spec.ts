import { TestBed } from '@angular/core/testing';

import { PatientServService } from './patient-serv.service';

describe('PatientServService', () => {
  let service: PatientServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
