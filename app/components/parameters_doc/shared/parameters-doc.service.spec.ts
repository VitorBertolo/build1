import { TestBed } from '@angular/core/testing';

import { ParametersDocService } from './parameters-doc.service';

describe('ParametersDocService', () => {
  let service: ParametersDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametersDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
