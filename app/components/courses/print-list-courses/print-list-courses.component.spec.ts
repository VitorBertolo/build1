import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintListCoursesComponent } from './print-list-courses.component';

describe('PrintListCoursesComponent', () => {
  let component: PrintListCoursesComponent;
  let fixture: ComponentFixture<PrintListCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintListCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
