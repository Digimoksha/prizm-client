import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerGenerateRfqWizardComponent } from './buyer-generate-rfq-wizard.component';

describe('BuyerGenerateRfqWizardComponent', () => {
  let component: BuyerGenerateRfqWizardComponent;
  let fixture: ComponentFixture<BuyerGenerateRfqWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerGenerateRfqWizardComponent]
    });
    fixture = TestBed.createComponent(BuyerGenerateRfqWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
