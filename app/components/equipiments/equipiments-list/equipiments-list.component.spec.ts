import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipimentsListComponent } from './equipiments-list.component';

describe('EquipimentsListComponent', () => {
  let component: EquipimentsListComponent;
  let fixture: ComponentFixture<EquipimentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipimentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipimentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
