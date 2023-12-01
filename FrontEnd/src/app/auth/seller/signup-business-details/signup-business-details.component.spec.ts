import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBusinessDetailsComponent } from './signup-business-details.component';

describe('SignupBusinessDetailsComponent', () => {
  let component: SignupBusinessDetailsComponent;
  let fixture: ComponentFixture<SignupBusinessDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupBusinessDetailsComponent]
    });
    fixture = TestBed.createComponent(SignupBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
