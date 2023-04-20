import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsNoticeComponent } from './lists-notice.component';

describe('ListsNoticeComponent', () => {
  let component: ListsNoticeComponent;
  let fixture: ComponentFixture<ListsNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
