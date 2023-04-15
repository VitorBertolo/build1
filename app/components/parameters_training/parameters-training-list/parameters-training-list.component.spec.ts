import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersTrainingListComponent } from './parameters-training-list.component';

describe('ParametersTrainingListComponent', () => {
  let component: ParametersTrainingListComponent;
  let fixture: ComponentFixture<ParametersTrainingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersTrainingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersTrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
