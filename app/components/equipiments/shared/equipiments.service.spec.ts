import { TestBed } from '@angular/core/testing';

import { EquipimentsService } from './equipiments.service';

describe('EquipimentsService', () => {
  let service: EquipimentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipimentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
