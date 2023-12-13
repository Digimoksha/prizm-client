import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('login', {static: false}) login!: NgForm
  memberTypes: any = []

  isErrorFound: boolean = false
  errorMessage: string = ''
  isLoading : boolean = false

  constructor(private memberService: MemberService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    this.memberService.fetchMemberType()
    .subscribe({
      next: (respaData: any)=>{
        this.memberTypes = respaData.data
      }
    });
  }

  onLogin(logIn: NgForm){
    const formDetail = logIn.value;
    console.log(formDetail)
    this.memberService.logIn(
      formDetail.memberTypeId,
      formDetail.phoneNumber,
      formDetail.password
    ).subscribe({
    next: (resData: any)=>{
      console.log(resData);
      const tokenObj={
        token: resData.data.token,
        expiresIn: Date.now()+(5*60*1000)
      }
      localStorage.setItem('Authorization',JSON.stringify(tokenObj));
      localStorage.setItem('memberId',resData.data.memberId.toString());
      if(resData.data.memberType.type)
        localStorage.setItem('memberType',resData.data.memberType.type.toLowerCase().toString());
      else
        localStorage.setItem('memberType', 'buyer');
      
      this.isLoading = false
      if(resData.data.memberType && resData.data.memberType.type.toLowerCase() == 'buyer')
        this.router.navigate([`/buyer-dashboard/${resData.data.memberId}`])
      else if(resData.data.memberType.type.toLowerCase() == 'seller')
        this.router.navigate([`/seller-business-details/${resData.data.memberId}`])
      else
        this.router.navigate([`/buyer-dashboard/${resData.data.memberId}`])
      },
      error: err=>{
        this.isErrorFound = true
        this.errorMessage = err.error.message
        this.isLoading = false
        console.log(this.errorMessage)
      }
    })
  }
  color = 'primary'
}
