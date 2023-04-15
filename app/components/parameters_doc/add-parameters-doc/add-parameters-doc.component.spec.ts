import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParametersDocComponent } from './add-parameters-doc.component';

describe('AddParametersDocComponent', () => {
  let component: AddParametersDocComponent;
  let fixture: ComponentFixture<AddParametersDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParametersDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParametersDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
