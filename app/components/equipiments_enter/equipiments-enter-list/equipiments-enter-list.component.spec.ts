import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipimentsEnterListComponent } from './equipiments-enter-list.component';

describe('EquipimentsEnterListComponent', () => {
  let component: EquipimentsEnterListComponent;
  let fixture: ComponentFixture<EquipimentsEnterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipimentsEnterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipimentsEnterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
