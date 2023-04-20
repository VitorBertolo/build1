import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormServicesComponent } from './order-form-services.component';

describe('OrderFormServicesComponent', () => {
  let component: OrderFormServicesComponent;
  let fixture: ComponentFixture<OrderFormServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFormServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
