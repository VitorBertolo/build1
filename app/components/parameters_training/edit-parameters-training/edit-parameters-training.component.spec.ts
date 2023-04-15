import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParametersTrainingComponent } from './edit-parameters-training.component';

describe('EditParametersTrainingComponent', () => {
  let component: EditParametersTrainingComponent;
  let fixture: ComponentFixture<EditParametersTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParametersTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParametersTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
