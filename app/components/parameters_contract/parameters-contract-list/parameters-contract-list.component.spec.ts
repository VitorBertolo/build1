import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersContractListComponent } from './parameters-contract-list.component';

describe('ParametersContractListComponent', () => {
  let component: ParametersContractListComponent;
  let fixture: ComponentFixture<ParametersContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersContractListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
