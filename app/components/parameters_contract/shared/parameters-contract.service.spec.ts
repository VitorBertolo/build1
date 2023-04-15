import { TestBed } from '@angular/core/testing';

import { ParametersContractService } from './parameters-contract.service';

describe('ParametersContractService', () => {
  let service: ParametersContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametersContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
