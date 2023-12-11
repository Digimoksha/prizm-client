import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';




export interface rfqDetail{
  itemName?:string,
  brand?: string,
  qty?:number,
  store1?: number,
  store2?: number,
  store3?: number
}
const ELEMENT_DATA: rfqDetail[] = [
  {itemName: 'Combined Box 16Amp', brand: 'Anchor', qty: 20, store1: 120,store2: 134,store3: 90},
  {itemName: '2 Modular Sheet', brand: 'Nowa', qty: 20, store1: 120,store2: 134,store3: 90},
  {itemName: 'LED Bulb 9W', brand: 'Havells', qty: 25, store1: 120,store2: 134,store3: 90}
];
@Component({
  selector: 'app-buyer-rfq-detail',
  templateUrl: './buyer-rfq-detail.component.html',
  styleUrls: ['./buyer-rfq-detail.component.css']
})
export class BuyerRfqDetailComponent {
  displayedColumns: string[] = ['Item Name', 'Brand','Qty', 'select', 'Store1','select', 'Store2','select', 'Store3'];
  dataSource = new MatTableDataSource<rfqDetail>(ELEMENT_DATA);
  selection = new SelectionModel<rfqDetail>(true, []);

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
  checkboxLabel(row?: rfqDetail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${this.dataSource.data.indexOf(row) + 1}`;
  }
  getTotalCost(){
   return ELEMENT_DATA.map(el=>el.store1).reduce((acc, quotation)=> acc! + (quotation || 0), 0)
  }
}
