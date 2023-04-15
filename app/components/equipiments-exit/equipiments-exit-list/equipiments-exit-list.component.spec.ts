import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipimentsExitListComponent } from './equipiments-exit-list.component';

describe('EquipimentsExitListComponent', () => {
  let component: EquipimentsExitListComponent;
  let fixture: ComponentFixture<EquipimentsExitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipimentsExitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipimentsExitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
