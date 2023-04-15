import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipimentsExitComponent } from './add-equipiments-exit.component';

describe('AddEquipimentsExitComponent', () => {
  let component: AddEquipimentsExitComponent;
  let fixture: ComponentFixture<AddEquipimentsExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipimentsExitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipimentsExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
