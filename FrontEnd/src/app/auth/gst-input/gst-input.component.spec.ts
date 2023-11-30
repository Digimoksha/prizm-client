import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstInputComponent } from './gst-input.component';

describe('GstInputComponent', () => {
  let component: GstInputComponent;
  let fixture: ComponentFixture<GstInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GstInputComponent]
    });
    fixture = TestBed.createComponent(GstInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
