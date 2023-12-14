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
  selector: 'app-buyer-society-details',
  templateUrl: './buyer-society-details.component.html',
  styleUrls: ['./buyer-society-details.component.css']
})
export class BuyerSocietyDetailsComponent {
  @ViewChild('societyDetails', {static: false}) societyDetails!: NgForm

  isErrorFound: boolean = false
  errorMessage: string = ''
  isLoading : boolean = false
  stateItems: State[] = []
  memberId : any = null;
  memberDetail : any = {};
  buyerData  = {
    memberId : null,
    address : null, 
    adminName : null,
    city : null, 
    email : null,
    gstNo : null,
    tanNo : null,
    panNo : null,
    pincode : null,
    societyName : null,
    state : null,
    memberAddressId : null
  };

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
    this.memberService.fetchMemberDetail(this.memberId)
    .subscribe({
      next: (respaData: any)=>{
        this.memberDetail = respaData.data;
        const memberAddress = this.memberDetail.memberAddresses ? this.memberDetail.memberAddresses[0] ?? null : null;
        this.buyerData  = {
          memberId :  this.memberDetail.id ?? null,
          societyName : respaData.data.name ?? null,
          email  : respaData.data.email ?? null,
          gstNo : this.memberDetail.buyerDetail ? this.memberDetail.buyerDetail.gst_no ?? null : null,
          tanNo : this.memberDetail.buyerDetail ? this.memberDetail.buyerDetail.tan_no ?? null : null,
          panNo : this.memberDetail.buyerDetail ? this.memberDetail.buyerDetail.pan_no ?? null : null,
          adminName : this.memberDetail.buyerDetail ? this.memberDetail.buyerDetail.admin_name ?? null :null,
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
    
    this.memberService.saveBuyerDetail(
      formDetail.memberId,
      formDetail.address, 
      formDetail.adminName,
      formDetail.city, 
      formDetail.email,
      formDetail.gstNo,
      formDetail.tanNo,
      formDetail.panNo,
      formDetail.pincode,
      formDetail.societyName,
      formDetail.state,
      formDetail.memberAddressId
    ).subscribe({
    next: (respData : any) =>{
        this.isLoading = false
        this.router.navigate([`/user-addition/${respData.data.memberId}`])
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
    this.router.navigate([`/buyer-dashboard/${this.memberId}`])
  }

}
