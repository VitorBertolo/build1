import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParametersContractComponent } from './edit-parameters-contract.component';

describe('EditParametersContractComponent', () => {
  let component: EditParametersContractComponent;
  let fixture: ComponentFixture<EditParametersContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParametersContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParametersContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
