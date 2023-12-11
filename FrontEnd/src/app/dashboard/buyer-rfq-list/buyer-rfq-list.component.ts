import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface rfqData{
  rfqId?:string,
  rfqName?: string,
  description?:string,
  status? :string,
  qty?: number,
  bids?: number,
  lowestPrice ?: string,
  rfqDate ?: string
}
@Component({
  selector: 'app-buyer-rfq-list',
  templateUrl: './buyer-rfq-list.component.html',
  styleUrls: ['./buyer-rfq-list.component.css']
})
export class BuyerRfqListComponent implements OnInit {
  selectedStatus: string = 'All';
  filteredDataSource: rfqData[] = [{}]
  displayedColumns: string[] = ['RFQ ID', 'RFQ Name','Description', 'Status','Qty','Bids','Lowest Price','RFQ Date'];
  ELEMENT_DATA: rfqData[] = [
    {rfqId: 'RFQ001', rfqName: 'Electrical Pipes', description: 'Lorem ipsum dolor sit...', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Plumbing Supplies', description: 'Quisque lacinia vitae', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Gardening Equipment', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Switches', description: 'Aenean commodo, leo id', status: 'INACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Sep 2023 refill', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '2 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Synthetic grass mats', description: 'Aenean commodo, leo id', status: 'DRAFT', qty: 4, bids: 8, lowestPrice: '3 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'},
    {rfqId: 'RFQ001', rfqName: 'Cables and lights', description: 'Cras commodo tincidunt', status: 'ACTIVE', qty: 4, bids: 8, lowestPrice: '4 items', rfqDate: '24/12/2023'}
  ];
   dataSource = new MatTableDataSource(this.ELEMENT_DATA)
   ngOnInit(): void {
       this.onTabClick('All')
   }
   onTabClick(status: string){
    this.selectedStatus = status
    this.updateDataSource();
  }
  updateDataSource(){
    if(this.selectedStatus === 'All'){
      console.log(this.dataSource)
      this.filteredDataSource=this.ELEMENT_DATA
    }else{
      this.filteredDataSource =this.ELEMENT_DATA.filter(item=> item.status === this.selectedStatus)
    }

  }
   applyFilter(event: Event) {
    console.log(this.filteredDataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
