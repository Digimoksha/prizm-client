import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface paymentDetail {
  rfqId ?: string,
  rfqName ?: string,
  description ?: string,
  status ?: string,
  amount ?: string,
  dueDate ?: string
}
@Component({
  selector: 'app-buyer-payments',
  templateUrl: './buyer-payments.component.html',
  styleUrls: ['./buyer-payments.component.css']
})
export class BuyerPaymentsComponent {
  displayedColumns: string[] = ['RFQ ID', 'RFQ Name','Description', 'Status','Amount','Due Date'];
  ELEMENT_DATA: paymentDetail[] = [
    {rfqId: 'RFQ001', rfqName: 'Electrical Pipes', description: 'Lorem ipsum dolor sit...', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Plumbing Supplies', description: 'Quisque lacinia vitae', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Gardening Equipment', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Switches', description: 'Aenean commodo, leo id', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Sep 2023 refill', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Synthetic grass mats', description: 'Aenean commodo, leo id', status: 'released', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'due', amount: 'rs 2000', dueDate: '31-10-2023'}
  ];
   dataSource = new MatTableDataSource(this.ELEMENT_DATA)


   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
