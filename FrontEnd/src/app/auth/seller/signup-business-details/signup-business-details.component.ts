import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MemberService } from '../../member.service';
import { CommonService } from '../../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

interface State {
  id: number;
  state_name: string;
 }

@Component({
  selector: 'app-signup-business-details',
  templateUrl: './signup-business-details.component.html',
  styleUrls: ['./signup-business-details.component.css']
})
export class SignupBusinessDetailsComponent {
  @ViewChild('businessDetails', {static: false}) businessDetails!: NgForm

  isErrorFound: boolean = false
  errorMessage: string = ''
  isLoading : boolean = false
  stateItems: State[] = []
  memberId : any = null;
  memberDetail : any = {};
  sellerData  =  {
    memberId:null,
    ownerName:null,
    address: null,
    state:null,
    city:null,
    pincode:null,
    email:null,
    businessName: null,
    productType:null,
    productTypeId:null,
    memberAddressId: null
  }

  constructor(private memberService: MemberService,private commonService: CommonService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    this.commonService.fetchStates()
    .subscribe({
      next: (statesData: any)=>{
          const statesArr = statesData.data
          statesArr.forEach((state: { id: any; state_name: any; })=>{
          const stateDataObj: State = {
            id: state.id,
            state_name: state.state_name
          }
          this.stateItems.push(stateDataObj)
        })
      }
    });
    this.memberId = this.route.snapshot.paramMap.get('memberId');
    this.memberService.fetchSellerDetail(this.memberId)
    .subscribe({
      next: (respaData: any)=>{
        this.memberDetail = respaData.data;
        const memberAddress = this.memberDetail.memberAddresses ? this.memberDetail.memberAddresses[0] ?? null : null;
        this.sellerData  = {
          memberId:this.memberDetail.id ?? null,
          ownerName:respaData.data.name ?? null,
          email  : respaData.data.email ?? null,
          businessName: this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.business_name ?? null : null,
          productType:this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.product_type ?? null : null,
          productTypeId:this.memberDetail.sellerDetail ? this.memberDetail.sellerDetail.product_type_id ?? null : null,
          memberAddressId : memberAddress.id ?? null,
          address : memberAddress.address  ?? null,
          pincode : memberAddress.pincode  ?? null,
          city : memberAddress.location  ?? null,
          state : memberAddress.state  ?? null,
        }
      }
    });
  }

  onSave(societyDetails: NgForm){
    const formDetail = societyDetails.value;
    console.log(formDetail)
    
    this.memberService.saveSellerBusinessDetail(
      formDetail.memberId,
      formDetail.ownerName,
      formDetail.address,
      formDetail.state,
      formDetail.city,
      formDetail.pincode,
      formDetail.email,
      formDetail.businessName,
      formDetail.productType,
      formDetail.productTypeId,
      formDetail.memberAddressId
    ).subscribe({
    next: (respData : any) =>{
        this.isLoading = false
        this.router.navigate([`/seller-bank-details/${respData.data.memberId}`])
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
