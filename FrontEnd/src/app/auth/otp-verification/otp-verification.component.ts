import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  @ViewChild('otpValidator', {static: false}) otpValidator!: NgForm

  isErrorFound: boolean = false;
  errorMessage: string = '';
  isLoading : boolean = false;
  memberId : any = null;
  memberDetail : any = {};
  memberType : any = null

  constructor(private memberService: MemberService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
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

  verifyOTP(signUp: NgForm){
    const formDetail = signUp.value;
    
    this.memberService.verifyOTP(
      formDetail.memberId,
      formDetail.otp
    ).subscribe({
    next: responseData=>{
        console.log(responseData)
        this.isLoading = false
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
