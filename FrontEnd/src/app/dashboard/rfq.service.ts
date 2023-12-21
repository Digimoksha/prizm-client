import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RfqService {
 baseUrl = `http://localhost:3001/api/v1/rfq`
  constructor(private http: HttpClient) { }
  generateRfq(name: string,quote_date: string,expected_delivery_date: string,status: string,request_by: string,payment_terms: string,description: string, file: File){
     const rfqData = new FormData()
     rfqData.append("name", name)
     rfqData.append("quote_date", quote_date)
     rfqData.append("expected_delivery_date", expected_delivery_date)
     rfqData.append("status", status)
     rfqData.append("request_by", request_by)
     rfqData.append("payment_terms", payment_terms)
     rfqData.append("description", description)
     rfqData.append("recfile", file, file.name)
     return this.http.post(`${this.baseUrl}/generate`,rfqData)
  }

  fetchRFQDetail(memberId: number){
    return this.http.get(`${this.baseUrl}/fetch-rfq-detail/${memberId}`)
  }
}
