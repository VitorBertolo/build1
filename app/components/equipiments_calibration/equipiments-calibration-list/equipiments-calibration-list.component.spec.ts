import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipimentsCalibrationListComponent } from './equipiments-calibration-list.component';

describe('EquipimentsCalibrationListComponent', () => {
  let component: EquipimentsCalibrationListComponent;
  let fixture: ComponentFixture<EquipimentsCalibrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipimentsCalibrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipimentsCalibrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
