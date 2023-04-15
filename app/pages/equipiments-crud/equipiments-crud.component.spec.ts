import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipimentsCrudComponent } from './equipiments-crud.component';

describe('EquipimentsCrudComponent', () => {
  let component: EquipimentsCrudComponent;
  let fixture: ComponentFixture<EquipimentsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipimentsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipimentsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
