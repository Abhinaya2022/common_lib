import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPopupComponent } from './common-popup.component';

describe('CommonPopupComponent', () => {
  let component: CommonPopupComponent;
  let fixture: ComponentFixture<CommonPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonPopupComponent]
    });
    fixture = TestBed.createComponent(CommonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
