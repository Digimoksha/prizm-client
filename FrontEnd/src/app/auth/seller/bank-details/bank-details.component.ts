import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MemberService } from '../../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {
  @ViewChild('bankDetails', {static: false}) bankDetails!: NgForm

  isErrorFound: boolean = false
  errorMessage: string = ''
  isLoading : boolean = false
  memberId : any = null;
  memberDetail : any = {};
  sellerData  =  {
    memberId:null,
    accountName:null,
    bankName: null,
    accountNumber:null,
    ifscCode:null,
    tanNo:null,
    panNo:null,
  }

  constructor(private memberService: MemberService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    
    this.memberId = this.route.snapshot.paramMap.get('memberId');
    this.memberService.fetchSellerDetail(this.memberId)
    .subscribe({
      next: (respaData: any)=>{
        this.memberDetail = respaData.data;
        
        this.sellerData  = {
          memberId:this.memberDetail.id ?? null,
          accountName : this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.account_name ?? null : null,
          bankName :this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.bank_name ?? null : null,
          accountNumber:this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.account_number ?? null : null,
          ifscCode : this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.account_name ?? null : null,
          tanNo : this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.tan_no ?? null : null,
          panNo : this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.pan_no ?? null : null,
        }
      }
    });
  }

  onSaveBankDetail(bankDetails: NgForm){
    const formDetail = bankDetails.value;
    console.log(formDetail)
    
    this.memberService.saveSellerBankDetail(
      formDetail.memberId,
      formDetail.accountName,
      formDetail.bankName,
      formDetail.accountNumber,
      formDetail.ifscCode,
      formDetail.tanNo,
      formDetail.panNo
    ).subscribe({
    next: (respData : any) =>{
        this.isLoading = false
        this.router.navigate([`/seller-dashboard/${respData.data.memberId}`])
      },
      error: err=>{
        this.isErrorFound = true
        this.errorMessage = err.error.message
        this.isLoading = false
        console.log(this.errorMessage)
      }
    })
  }

  backBtn() : void {
    this.router.navigate([`/seller-dashboard/${this.memberId}`])
  }

}
