import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParametersCityComponent } from './edit-parameters-city.component';

describe('EditParametersCityComponent', () => {
  let component: EditParametersCityComponent;
  let fixture: ComponentFixture<EditParametersCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParametersCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParametersCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
