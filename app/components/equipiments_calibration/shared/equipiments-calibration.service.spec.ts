import { TestBed } from '@angular/core/testing';

import { EquipimentsCalibrationService } from './equipiments-calibration.service';

describe('EquipimentsCalibrationService', () => {
  let service: EquipimentsCalibrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipimentsCalibrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
