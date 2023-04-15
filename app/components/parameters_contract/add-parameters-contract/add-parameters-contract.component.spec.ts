import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParametersContractComponent } from './add-parameters-contract.component';

describe('AddParametersContractComponent', () => {
  let component: AddParametersContractComponent;
  let fixture: ComponentFixture<AddParametersContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParametersContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParametersContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
