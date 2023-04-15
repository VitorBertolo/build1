import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipimentsComponent } from './add-equipiments.component';

describe('AddEquipimentsComponent', () => {
  let component: AddEquipimentsComponent;
  let fixture: ComponentFixture<AddEquipimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
