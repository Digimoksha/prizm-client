import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SignUpResponse {
  data: {
    memberId : number
  };
  message: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = 'http://localhost:3001/api/v1/member';
  constructor(private http: HttpClient) { }

    fetchMemberType(){
      return this.http.get(`${this.baseUrl}/fetch-type`)
    }

    signUp(countryCode: string, memberTypeId: number, phoneNumber: string){
      const signUpObj = {
        countryCode: countryCode,
        memberTypeId: memberTypeId,
        phoneNumber: phoneNumber
      }
      return this.http.post<SignUpResponse>(`${this.baseUrl}/register`,signUpObj)
    }

    fetchMemberDetail(memberId: number){
      return this.http.get(`${this.baseUrl}/fetch-member-detail/${memberId}`)
    }

    verifyOTP(memberId: number, otp: string){
      const otpObj = {
        memberId: memberId,
        otp: otp
      }
      return this.http.post(`${this.baseUrl}/verify-otp`,otpObj)
    }
}