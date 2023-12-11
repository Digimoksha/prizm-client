import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRfqDetailComponent } from './buyer-rfq-detail.component';

describe('BuyerRfqDetailComponent', () => {
  let component: BuyerRfqDetailComponent;
  let fixture: ComponentFixture<BuyerRfqDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerRfqDetailComponent]
    });
    fixture = TestBed.createComponent(BuyerRfqDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
