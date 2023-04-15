import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsCrudComponent } from './lists-crud.component';

describe('ListsCrudComponent', () => {
  let component: ListsCrudComponent;
  let fixture: ComponentFixture<ListsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
