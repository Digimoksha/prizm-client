import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersDetailComponent } from './purchase-orders-detail.component';

describe('PurchaseOrdersDetailComponent', () => {
  let component: PurchaseOrdersDetailComponent;
  let fixture: ComponentFixture<PurchaseOrdersDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrdersDetailComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrdersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
