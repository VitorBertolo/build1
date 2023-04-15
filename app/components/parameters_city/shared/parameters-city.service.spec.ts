import { TestBed } from '@angular/core/testing';

import { ParametersCityService } from './parameters-city.service';

describe('ParametersCityService', () => {
  let service: ParametersCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametersCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
