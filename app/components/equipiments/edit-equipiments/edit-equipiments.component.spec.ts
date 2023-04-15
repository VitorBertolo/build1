import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipimentsComponent } from './edit-equipiments.component';

describe('EditEquipimentsComponent', () => {
  let component: EditEquipimentsComponent;
  let fixture: ComponentFixture<EditEquipimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
