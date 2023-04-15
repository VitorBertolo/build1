import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersDocListComponent } from './parameters-doc-list.component';

describe('ParametersDocListComponent', () => {
  let component: ParametersDocListComponent;
  let fixture: ComponentFixture<ParametersDocListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersDocListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersDocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
