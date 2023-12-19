import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface rfqData{
  item?:string,
  brand?: string,
  price?:number,
  qty?: number,
  amount?: number
}
@Component({
  selector: 'app-purchase-order-status',
  templateUrl: './purchase-order-status.component.html',
  styleUrls: ['./purchase-order-status.component.css']
})
export class PurchaseOrderStatusComponent {
  selectedRFQ: string = 'RFQ1';
  isTransitCompleted: boolean = true
  isDelivered: boolean = true
  isInvoiceGenerated: boolean = true
  isThreeWayMatchCompleted: boolean = true
  isPaymentProcessing: boolean = true
  isPaymentCollected: boolean = false
  isOrderCompleted: boolean = false
  displayedColumns: string[] = ['Item', 'Brand','Price', 'Qty','Amount'];
  ELEMENT_DATA: rfqData[] = [
    {item: 'RFQ001', brand: 'Electrical Pipes', price: 123,  qty: 4, amount: 2500},
    {item: 'RFQ001', brand: 'Electrical Pipes', price: 123,  qty: 4, amount: 8},
    {item: 'RFQ001', brand: 'Electrical Pipes', price: 123,  qty: 4, amount: 8},
    {item: 'RFQ001', brand: 'Electrical Pipes', price: 123,  qty: 4, amount: 8},
    {item: 'RFQ001', brand: 'Electrical Pipes', price: 123,  qty: 4, amount: 8},
    {item: 'RFQ001', brand: 'Electrical Pipes', price: 123,  qty: 4, amount: 8}
  ];
   dataSource = new MatTableDataSource(this.ELEMENT_DATA)
   onTabClick(rfq: string){
    this.selectedRFQ = rfq
   }
}
