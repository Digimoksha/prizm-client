import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer-generate-rfq-wizard',
  templateUrl: './buyer-generate-rfq-wizard.component.html',
  styleUrls: ['./buyer-generate-rfq-wizard.component.css']
})
export class BuyerGenerateRfqWizardComponent {
  rfqItemsDetailArr = [
    {itemName: "32 Ampere MCB", brand: "Standard", qty: "20", maxPrice: "120"},
    {itemName: "32 Ampere MCB", brand: "Standard", qty: "20", maxPrice: "120"},
    {itemName: "32 Ampere MCB", brand: "Standard", qty: "20", maxPrice: "120"},
    {itemName: "32 Ampere MCB", brand: "Standard", qty: "20", maxPrice: "120"}
]
  onRemoveRow(index: number){
    this.rfqItemsDetailArr.splice(index, 1)
  }
  onAddRow(){
this.rfqItemsDetailArr.push({itemName: "", brand: "", qty: "", maxPrice: ""})
  }
}
