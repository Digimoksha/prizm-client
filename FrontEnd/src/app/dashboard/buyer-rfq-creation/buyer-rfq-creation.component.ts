import { Component, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RfqService } from '../rfq.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buyer-rfq-creation',
  templateUrl: './buyer-rfq-creation.component.html',
  styleUrls: ['./buyer-rfq-creation.component.css']
})
export class BuyerRfqCreationComponent {
  rfqFormData: any = {
    file: null
  }
  constructor(private rfqService: RfqService, private route: ActivatedRoute,  private router: Router){}
  // private gapi: any
  // constructor(private zone: NgZone){
  //   // Ensure that the 'gapi' object is available in the global scope
  //   this.zone.runOutsideAngular(() => {
  //     const script = document.createElement('script');
  //     script.src = 'https://apis.google.com/js/api.js';
  //     script.type = 'text/javascript';
  //     script.onload = () => {
  //       this.gapi = window['gapi'];
  //       this.onApiLoad();
  //     };
  //     document.head.appendChild(script);
  //   });
  // }
  // private onApiLoad() {
  //   // Your API loading logic here, for example, loading the Picker API
  //   this.gapi.load('picker', { callback: this.onPickerApiLoad.bind(this) });
  // }
  // private onPickerApiLoad() {
  //   // Now 'google' and 'gapi' should be recognized
  //   this.selectFromGoogleDrive();
  // }

  // // Your other component logic

  // selectFromGoogleDrive() {
  //   this.gapi.load('auth', { 'callback': this.onAuthApiLoad.bind(this) });
  //   this.gapi.load('picker');
  // }
  // onAuthApiLoad() {
  //   gapi.auth.authorize(
  //     {
  //       'client_id': 'YOUR_GOOGLE_CLIENT_ID',
  //       'scope': ['https://www.googleapis.com/auth/drive'],
  //       'immediate': false,
  //     },
  //     this.handleAuthResult.bind(this)
  //   );
  // }

  // handleAuthResult(authResult: any) {
  //   if (authResult && !authResult.error) {
  //     this.createPicker();
  //   }
  // }

  // createPicker() {
  //   const picker = new google.picker.PickerBuilder()
  //     .addView(google.picker.ViewId.DOCS)
  //     .setOAuthToken(gapi.auth.getToken().access_token)
  //     .setDeveloperKey('YOUR_GOOGLE_DEVELOPER_KEY')
  //     .setCallback(this.pickerCallback.bind(this))
  //     .build();
  //   picker.setVisible(true);
  // }

  // pickerCallback(data: any) {
  //   if (data.action === google.picker.Action.PICKED) {
  //     const fileId = data.docs[0].id;
  //     // Use the fileId or perform further actions with the selected file
  //     console.log('Selected File ID:', fileId);
  //   }
  // }
//buyerId = this.route.snapshot.paramMap.get('memberId')
  onFilePick(event: any){
    const file: File = event.target.files[0]
    this.rfqFormData.file = file
  }
  onSaveRfqDetail(rfqDetail: NgForm){
    const rfqData = rfqDetail.value
    const status = 0;
    const requestedBy = localStorage.getItem('memberId');
      this.rfqFormData.name= rfqData.rfqName,
      this.rfqFormData.quote_date= rfqData.quoteDate,
      this.rfqFormData.expected_delivery_date= rfqData.expectedDeliveryDate,
      this.rfqFormData.status= status,
      this.rfqFormData.request_by= requestedBy,
      this.rfqFormData.payment_terms= rfqData.paymentTerms,
      this.rfqFormData.description= rfqData.description
      console.log(this.rfqFormData);
     this.rfqService.generateRfq(this.rfqFormData.name, this.rfqFormData.quote_date, this.rfqFormData.expected_delivery_date, this.rfqFormData.status, this.rfqFormData.request_by, this.rfqFormData.description, this.rfqFormData.payment_terms, this.rfqFormData.file)
     .subscribe({
       next: ()=>{
         console.log('data saved')
       },
       error: err=>{
         console.log(err)
       }
    })
  }

}
