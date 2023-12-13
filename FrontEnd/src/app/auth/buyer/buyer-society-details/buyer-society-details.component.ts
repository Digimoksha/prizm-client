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
  memberType : any = null

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
        this.memberDetail = respaData.data
        this.memberType = this.memberDetail.memberType ? this.memberDetail.memberType.type : null
        
        console.log(this.memberDetail)
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
        console.log(respData)
        //this.router.navigate([`/buyer-dashboard/${respData.data.memberId}`])
      },
      error: err=>{
        this.isErrorFound = true
        this.errorMessage = err.error.message
        this.isLoading = false
        console.log(this.errorMessage)
      }
    })
  }

}
