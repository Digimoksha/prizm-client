import { Component, OnInit,ChangeDetectorRef, HostListener,ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { RfqService } from '../rfq.service';

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
  selectedStatus: string = 'ALL';
  searchQuery: any = '';
  filteredDataSource: rfqData[] = [{}];
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
   errorMessage: any;
   constructor(private rfqService: RfqService,private route: ActivatedRoute, private router: Router,
    private changeDetectorRefs: ChangeDetectorRef){}
   ngOnInit(): void {
       this.onTabClick('All')
       this.refresh()
   }
   onTabClick(status: string){
    this.selectedStatus = status
    this.refresh();
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
    console.log(this.dataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refresh() {
    var memberId = 1;//localStorage.getItem('memberId');
    this.rfqService.fetchRFQDetail(memberId).
    subscribe({
        next: (responseData : any) => {        
            if(responseData && responseData.data){
            let respData = responseData.data;
            let arrResult = []
            for(let i=0;i<respData.length;i++){
              const obj = {
                rfqId: respData[i].id, 
                rfqName: respData[i].name,
                description: respData[i].description, 
                status: this.getStatusStr(respData[i].status),
                qty: respData[i].rfqItems.length,
                bids: 0,
                lowestPrice:'4 Items',
                rfqDate: respData[i].quote_date,
              }
              arrResult[i] = obj;
            }
            if(this.selectedStatus === 'All'){
              this.dataSource.data = arrResult;
            }else{
              this.dataSource.data = arrResult.filter(item=> item.status === this.selectedStatus)
            }
          }
        },
        error: err=> {console.log(err)
        this.errorMessage = err
      }
    })
  
    
    this.changeDetectorRefs.detectChanges();
  }

  getStatusStr(status: number) {
    let statusStr = 'All';
    if(status === 4){
        statusStr = 'All';
    } else if(status === 3){
        statusStr = 'COMPLETED';
    }else if(status === 2){
        statusStr = 'DRAFT';
    }else if(status === 1){
        statusStr = 'ACTIVE';
    } else {
        statusStr = 'INACTIVE';
    }
    return statusStr;
}

}
