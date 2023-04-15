import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParametersTrainingComponent } from './add-parameters-training.component';

describe('AddParametersTrainingComponent', () => {
  let component: AddParametersTrainingComponent;
  let fixture: ComponentFixture<AddParametersTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParametersTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParametersTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
