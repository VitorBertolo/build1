import { TestBed } from '@angular/core/testing';

import { ParametersTrainingService } from './parameters-training.service';

describe('ParametersTrainingService', () => {
  let service: ParametersTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametersTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
