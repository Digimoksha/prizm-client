import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

interface passwordResponse {
  data: object;
  message: string;
  status: boolean;
}

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
[x: string]: any;
  @ViewChild('passwordForm', {static: false}) passwordForm!: NgForm

  isErrorFound: boolean = false;
  errorMessage: string = '';
  isLoading : boolean = false;
  memberId : any = null;
  respData : passwordResponse | undefined

  constructor(private memberService: MemberService, private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    this.memberId = this.route.snapshot.paramMap.get('memberId');
  }

  setPassword(passwordForm: NgForm){
    const formDetail = passwordForm.value;
    this.memberService.setPassword(
      this.memberId,
      formDetail.password,
      formDetail.confirmPassword
    ).subscribe({
    next: (respData : any) =>{
        this.isLoading = false
        var data = respData.data;
        this.router.navigate([`/login`])
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
