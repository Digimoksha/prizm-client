import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RfqService {
 baseUrl = `http://localhost:3001/api/v1`
  constructor(private http: HttpClient) { }
  generateRfq(name: string,quote_date: string,expected_delivery_date: string,status: string,request_by: string,payment_terms: string,description: string){
    // const rfqData = new FormData()
    // rfqData.append("rfqName", rfqName)
    // rfqData.append("quoteDate", quoteDate)
    // rfqData.append("expectedDeliveryDate", expectedDeliveryDate)
    // rfqData.append("status", status.toString())
    // rfqData.append("requestBy", requestBy.toString())
    // rfqData.append("paymentTerms", paymentTerms)
    // rfqData.append("description", description)
    // rfqData.append("recFile", file, file.name)
    // return this.http.post(`${this.baseUrl}/rfq/generate`,rfqData)
  }
}
