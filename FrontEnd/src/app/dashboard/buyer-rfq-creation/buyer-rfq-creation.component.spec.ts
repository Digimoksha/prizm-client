import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRfqCreationComponent } from './buyer-rfq-creation.component';

describe('BuyerRfqCreationComponent', () => {
  let component: BuyerRfqCreationComponent;
  let fixture: ComponentFixture<BuyerRfqCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerRfqCreationComponent]
    });
    fixture = TestBed.createComponent(BuyerRfqCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
