import { Component, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RfqService } from '../rfq.service';

@Component({
  selector: 'app-buyer-rfq-creation',
  templateUrl: './buyer-rfq-creation.component.html',
  styleUrls: ['./buyer-rfq-creation.component.css']
})
export class BuyerRfqCreationComponent {
  constructor(private rfqService: RfqService){}
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
  onFilePick(event: any){

  }
  onSaveRfqDetail(rfqDetail: NgForm){
    const rfqData = rfqDetail.value
    const status = 1
    const requestedBy = 1
    // this.rfqService.generateRfq(rfqData.rfqName, rfqData.quoteDate, rfqData.expectedDeliveryDate, status, requestedBy, rfqData.paymentTerms, rfqData.description, rfqData.file)
    // .subscribe({
    //   next: (responseData)=>{
    //     console.log('data saved')
    //   },
    //   error: err=>{
    //     console.log(err)
    //   }
    // })
  }
}
