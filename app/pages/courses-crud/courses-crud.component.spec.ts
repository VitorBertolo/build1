import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCrudComponent } from './courses-crud.component';

describe('CoursesCrudComponent', () => {
  let component: CoursesCrudComponent;
  let fixture: ComponentFixture<CoursesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
