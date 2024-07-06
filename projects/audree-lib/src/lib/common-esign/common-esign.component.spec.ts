import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonEsignComponent } from './common-esign.component';

describe('CommonEsignComponent', () => {
  let component: CommonEsignComponent;
  let fixture: ComponentFixture<CommonEsignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonEsignComponent]
    });
    fixture = TestBed.createComponent(CommonEsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
