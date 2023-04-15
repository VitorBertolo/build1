import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersCityListComponent } from './parameters-city-list.component';

describe('ParametersCityListComponent', () => {
  let component: ParametersCityListComponent;
  let fixture: ComponentFixture<ParametersCityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersCityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
