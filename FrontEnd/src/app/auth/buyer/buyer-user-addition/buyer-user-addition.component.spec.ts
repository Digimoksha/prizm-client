import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerUserAdditionComponent } from './buyer-user-addition.component';

describe('BuyerUserAdditionComponent', () => {
  let component: BuyerUserAdditionComponent;
  let fixture: ComponentFixture<BuyerUserAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerUserAdditionComponent]
    });
    fixture = TestBed.createComponent(BuyerUserAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
