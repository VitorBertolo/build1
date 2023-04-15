import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParametersDocComponent } from './edit-parameters-doc.component';

describe('EditParametersDocComponent', () => {
  let component: EditParametersDocComponent;
  let fixture: ComponentFixture<EditParametersDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParametersDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParametersDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
