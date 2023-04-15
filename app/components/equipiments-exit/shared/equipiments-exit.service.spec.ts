import { TestBed } from '@angular/core/testing';

import { EquipimentsExitService } from './equipiments-exit.service';

describe('EquipimentsExitService', () => {
  let service: EquipimentsExitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipimentsExitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
