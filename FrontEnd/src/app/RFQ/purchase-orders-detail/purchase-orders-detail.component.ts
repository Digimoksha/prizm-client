import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PODetail {
  item?: string;
  price?: number;
  qty?: number;
  amount?: number;
}

const ELEMENT_DATA: PODetail[] = [
  {item: 'Combined Box 16 Amp', price: 125, qty: 20, amount: 2500}
];
@Component({
  selector: 'app-purchase-orders-detail',
  templateUrl: './purchase-orders-detail.component.html',
  styleUrls: ['./purchase-orders-detail.component.css']
})
export class PurchaseOrdersDetailComponent {
  displayedColumns: string[] = ['select', 'item', 'price', 'qty', 'amount'];
  dataSource = new MatTableDataSource<PODetail>(ELEMENT_DATA);
  selection = new SelectionModel<PODetail>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PODetail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row) + 1}`;
  }
   getTotalCost() {
     return this.dataSource.data.map(t => {
      console.log(t.amount)
      return t.amount
     }).reduce((acc, value) => acc! + (value || 0), 0);
   }
}
