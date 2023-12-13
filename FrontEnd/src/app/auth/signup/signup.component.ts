import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

interface Provider {
  region: string,
  country: string,
  locale: string,
  company: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('signup', {static: false}) signup!: NgForm
  memberTypes: any = []
  isSignedUp: boolean = false
  isErrorFound: boolean = false
  errorMessage: string = ''
  isLoading : boolean = false
  respData : any = {}

  constructor(private memberService: MemberService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    this.memberService.fetchMemberType()
    .subscribe({
      next: (respaData: any)=>{
        this.memberTypes = respaData.data
      }
    });
  }

  onSignUp(signUp: NgForm){
    const formDetail = signUp.value;
    console.log(formDetail);
    
    this.memberService.signUp(
      formDetail.countryCode,
      formDetail.memberTypeId,
      formDetail.phoneNumber
    ).subscribe({
    next: responseData=>{
        console.log(responseData)
        var memberId = responseData.data.memberId
        this.isSignedUp=true
        this.router.navigate([`/otp-verification/${memberId}`])
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
