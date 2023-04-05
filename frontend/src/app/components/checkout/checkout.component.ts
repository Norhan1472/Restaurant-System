import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  checkoutFormParent!:FormGroup;
  constructor(private checkoutChildForm:FormBuilder){}
  
  ngOnInit(): void {
this.formsData();
  }

  formsData(){
    this.checkoutFormParent = this.checkoutChildForm.group({
      data:this.checkoutChildForm.group({
        fullName : [''],
        email:[''],
        phone:[''],
      }),
      fromPerson:this.checkoutChildForm.group({
        country:[''],
        state:[''],
        zipCode:[''],
      }),
      toPerson:this.checkoutChildForm.group({
        country:[''],
        state:[''],
        zipCode:[''],
      }),
      creditCard:this.checkoutChildForm.group({
        type:[''],
        cardNumber:[''],
        code:[''],
      })
    })
  }
  onSubmit(){
    console.log(this.checkoutFormParent.get("data")?.value);
    console.log(this.checkoutFormParent.get("fromPerson")?.value);
    console.log(this.checkoutFormParent.get("toPerson")?.value);
    console.log(this.checkoutFormParent.get("creditCard")?.value)
  }

  putSameData(event:Event){
    if((<HTMLInputElement>event.target).checked){
      this.checkoutFormParent.controls["toPerson"]?.setValue(
        this.checkoutFormParent.controls["fromPerson"].value
      )
    }else{
      this.checkoutFormParent.controls['toPerson'].reset();
    }
  }




}
