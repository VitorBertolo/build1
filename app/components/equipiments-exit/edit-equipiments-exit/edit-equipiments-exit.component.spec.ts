import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipimentsExitComponent } from './edit-equipiments-exit.component';

describe('EditEquipimentsExitComponent', () => {
  let component: EditEquipimentsExitComponent;
  let fixture: ComponentFixture<EditEquipimentsExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipimentsExitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipimentsExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
