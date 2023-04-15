import { TestBed } from '@angular/core/testing';

import { EquipimentsEnterService } from './equipiments-enter.service';

describe('EquipimentsEnterService', () => {
  let service: EquipimentsEnterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipimentsEnterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
