import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipimentsCalibrationComponent } from './add-equipiments-calibration.component';

describe('AddEquipimentsCalibrationComponent', () => {
  let component: AddEquipimentsCalibrationComponent;
  let fixture: ComponentFixture<AddEquipimentsCalibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipimentsCalibrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipimentsCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
