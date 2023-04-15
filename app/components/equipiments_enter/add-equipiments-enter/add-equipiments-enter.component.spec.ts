import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipimentsEnterComponent } from './add-equipiments-enter.component';

describe('AddEquipimentsEnterComponent', () => {
  let component: AddEquipimentsEnterComponent;
  let fixture: ComponentFixture<AddEquipimentsEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipimentsEnterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipimentsEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
