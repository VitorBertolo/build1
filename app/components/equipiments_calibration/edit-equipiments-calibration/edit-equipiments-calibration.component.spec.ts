import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipimentsCalibrationComponent } from './edit-equipiments-calibration.component';

describe('EditEquipimentsCalibrationComponent', () => {
  let component: EditEquipimentsCalibrationComponent;
  let fixture: ComponentFixture<EditEquipimentsCalibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipimentsCalibrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipimentsCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
