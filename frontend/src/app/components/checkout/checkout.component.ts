import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/model/country';
import { SpaceValidator } from 'src/app/model/space-validator';
import { State } from 'src/app/model/state';
import { CartService } from 'src/app/services/cart.service';
import { CountryService } from 'src/app/services/country.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  numOfOrders:number =0;
  totalPrice:number=0;
  checkoutFormParent!:FormGroup;
  countries:Country[] = [];
  statesFrom :State[] = [];
  statesTo :State[] = [];
  countryId!:number;
  constructor(private checkoutChildForm:FormBuilder,
              private countryService : CountryService,
              private stateService : StateService,
              private cartService:CartService){}
  
  ngOnInit(): void {
this.formsData();
this.getAllCountries();
this.getTotals();
  }

  formsData(){
    this.checkoutFormParent = this.checkoutChildForm.group({
      data:this.checkoutChildForm.group({
        fullName : new FormControl('',[
          Validators.required,
          SpaceValidator.checkSpace,
          Validators.minLength(8),
        ]),
        email:new FormControl('',[
          Validators.required,
          SpaceValidator.checkSpace,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        phone:new FormControl('',[
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          SpaceValidator.checkSpace,
          Validators.pattern('^[0-9]*$')
        ]),
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
    if (this.checkoutFormParent.invalid) {
      this.checkoutFormParent.markAllAsTouched()
    }
    console.log(this.checkoutFormParent.get("data")?.value);
    console.log("here");
    console.log(this.checkoutFormParent.get("toPerson.country")?.value)
    console.log(this.checkoutFormParent.get("fromPerson")?.value);
    console.log(this.checkoutFormParent.get("toPerson")?.value);
    console.log(this.checkoutFormParent.get("creditCard")?.value)
  }

get fullName(){
  //console.log(this.checkoutFormParent.get('data.fullName')?.value);
  return this.checkoutFormParent.get('data.fullName');
}

get email(){
  return this.checkoutFormParent.get('data.email');
}

get phone(){
  return this.checkoutFormParent.get('data.phone');
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
  getAllCountries(){
    this.countryService.getAllCountries().subscribe(
      data=>{
        console.log(data);
        this.countries = data;
        
      },
      error=>{
        console.log(error);
      }
    )

  }
  getStatesByCountryId(type:any){
    if(type ==="to"){
      this.stateService.getStatesByCountryId(this.countryId).subscribe(
        data=>{
          this.statesTo = data;
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      this.stateService.getStatesByCountryId(this.countryId).subscribe(
        data=>{
          this.statesFrom = data;
        },
        error=>{
          console.log(error);
        }
      )
    }
    /*getAllStates().subscribe(
      data=>{
        this.states = data;
      },
      error=>{
        console.log(error);
      }
    )*/
  }

  getData(type:any){
    if(type === "to"){
      console.log(this.checkoutFormParent.get("toPerson.country")?.value)
      this.countryId = this.checkoutFormParent.get("toPerson.country")?.value;
    }else{
      console.log(this.checkoutFormParent.get("fromPerson.country")?.value)
    this.countryId = this.checkoutFormParent.get("fromPerson.country")?.value;
    
    }
    
    
    this.getStatesByCountryId(type);
  }

  getTotals(){
    this.cartService.calculateTotals();
   // this.cartService.calculateTotals()
   this.cartService.numOfItems.subscribe(
    data=>{
      this.numOfOrders = data;
    },
    error=>{
      console.log(error);
    }
   );
   this.cartService.totalPrices.subscribe(
    data=>{
      this.totalPrice = data;
    },
    error=>{
      console.log(error);
    }
   )
  }



}
