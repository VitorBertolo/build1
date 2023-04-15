import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipimentsEnterComponent } from './edit-equipiments-enter.component';

describe('EditEquipimentsEnterComponent', () => {
  let component: EditEquipimentsEnterComponent;
  let fixture: ComponentFixture<EditEquipimentsEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipimentsEnterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipimentsEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
