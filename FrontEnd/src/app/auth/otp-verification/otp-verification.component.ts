import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

interface otpResponse {
  data: {
    memberId : number
  };
  message: string;
  status: boolean;
}

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
  respData : otpResponse | undefined

  constructor(private memberService: MemberService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    this.memberId = this.route.snapshot.paramMap.get('memberId');
    this.memberService.fetchMemberDetail(this.memberId)
    .subscribe({
      next: (respaData: any)=>{
        this.memberDetail = respaData.data;
        this.memberType = this.memberDetail.memberType ? this.memberDetail.memberType.type : null;
      }
    });
  }

  verifyOTP(signUp: NgForm){
    const formDetail = signUp.value;
    
    this.memberService.verifyOTP(
      formDetail.memberId,
      formDetail.otp
    ).subscribe({
    next: (respData : any) =>{
        this.isLoading = false
        var memberId = respData.data.memberId
        this.router.navigate([`/password-form/${memberId}`])
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
