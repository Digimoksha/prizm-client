import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSocietyDetailsComponent } from './buyer-society-details.component';

describe('BuyerSocietyDetailsComponent', () => {
  let component: BuyerSocietyDetailsComponent;
  let fixture: ComponentFixture<BuyerSocietyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerSocietyDetailsComponent]
    });
    fixture = TestBed.createComponent(BuyerSocietyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
