import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsCrudComponent } from './contracts-crud.component';

describe('ContractsCrudComponent', () => {
  let component: ContractsCrudComponent;
  let fixture: ComponentFixture<ContractsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
