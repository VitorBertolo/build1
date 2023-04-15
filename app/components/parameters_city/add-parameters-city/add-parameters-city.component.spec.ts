import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParametersCityComponent } from './add-parameters-city.component';

describe('AddParametersCityComponent', () => {
  let component: AddParametersCityComponent;
  let fixture: ComponentFixture<AddParametersCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParametersCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParametersCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
