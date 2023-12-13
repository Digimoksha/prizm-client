import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SignUpResponse {
  data: {
    memberId : number
  };
  message: string;
  status: boolean;
}

interface LoginResponse {
  data: {
    memberId: number;
    token: string;
    memberType:object;
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

    setPassword(memberId: number, password: string, confirmPassword: string){
      const passObj = {
        memberId: memberId,
        password: password,
        confirmPassword:confirmPassword
      }
      return this.http.post(`${this.baseUrl}/set-password`,passObj)
    }

    logIn( memberTypeId : number,phoneNumber: number, password: string){
      const otpObj = {
        memberTypeId: memberTypeId,
        phoneNumber: phoneNumber,
        password:password
      }
      return this.http.post<LoginResponse>(`${this.baseUrl}/login`,otpObj)
    }

    getToken() {
      return localStorage.getItem('Authorization');
    }
    get isLoggedIn(): boolean {
      let authToken = localStorage.getItem('Authorization');
      return authToken !== null ? true : false;
    }

    getMemberType(){
      return localStorage.getItem('memberType');
    }

    get isBuyer() : boolean {
      let memberType = localStorage.getItem('memberType');
      return memberType == 'buyer' ? true : false;
    }

    saveBuyerDetail(memberId:number,address: string, adminName: string, city: string, email:string,gstNo:string,tanNo:string,panNo:string,pincode:string,societyName:string,state:string,memberAddressId : null){
      const buyerObj = {
        member_id:memberId,
        society_name:societyName,
        address: address,
        state:state,
        city:city,
        pincode:pincode,
        email:email,
        admin_name: adminName,
        pan_no:panNo,
        gst_no:gstNo,
        tan_no:tanNo,
        memberAddressId: memberAddressId
      }
      return this.http.post(`${this.baseUrl}/save-buyer-details`,buyerObj)
    }
    
}