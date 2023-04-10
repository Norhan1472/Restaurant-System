import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Country } from 'src/app/model/country';
import { Item } from 'src/app/model/item';
import { PurchaseRequest } from 'src/app/model/purchase-request';
import { RequestOrder } from 'src/app/model/request-order';
import { SpaceValidator } from 'src/app/model/space-validator';
import { State } from 'src/app/model/state';
import { CartService } from 'src/app/services/cart.service';
import { CountryService } from 'src/app/services/country.service';
import { PurchaseService } from 'src/app/services/purchase.service';
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
              private cartService:CartService,
              private purchaseService:PurchaseService,
              private router:Router){}
  
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
          Validators.maxLength(11),
          Validators.minLength(11),
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
      this.statesTo=this.statesFrom;
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
  onSubmit(){
    if (this.checkoutFormParent.controls['data.email']?.invalid||
    this.checkoutFormParent.controls['data.fullName']?.invalid||
    this.checkoutFormParent.controls['data.phone']?.invalid) {
      
      console.log("lll");
      this.checkoutFormParent.markAllAsTouched()
    }//else{
      else{

        console.log("kkkkkkkkkkk");
        let client = this.checkoutFormParent.controls["data"].value;
        console.log(this.checkoutFormParent.controls['data'].value.fullName);
      client.name = this.checkoutFormParent.controls["data"].value.fullName;
      client.email = this.checkoutFormParent.controls["data"].value.email;
      client.phone = this.checkoutFormParent.controls["data"].value.phone;
      let fromAddress = this.checkoutFormParent.controls["fromPerson"].value;
      fromAddress.state = this.checkoutFormParent.controls["fromPerson"].value.state;
      let toAddress = this.checkoutFormParent.controls["toPerson"].value;
      toAddress.state = this.checkoutFormParent.controls["toPerson"].value.state;
      let requestOrder = new RequestOrder();
      requestOrder.totalPrice=this.totalPrice;
      requestOrder.totalQuantity = this.numOfOrders;
      let items :Item[]=[];
      for(let it of this.cartService.cartOrder){
        items.push(new Item(it));
      }
      let purchaseRequest : PurchaseRequest = new PurchaseRequest();
      purchaseRequest.client = client;
      purchaseRequest.fromAddress = fromAddress;
      purchaseRequest.toAddress = toAddress;
      purchaseRequest.requestOrder = requestOrder;
      purchaseRequest.items = items;
      ///////////////////////////////
      console.log(client);
      console.log(fromAddress);
      console.log(toAddress);
      console.log(requestOrder);
      console.log(items);

      //////////////////////////////
      this.makeOrder(purchaseRequest);
      }
      
    console.log(this.checkoutFormParent.get("data")?.value);
    console.log(this.checkoutFormParent.get("fromPerson")?.value);
    console.log(this.checkoutFormParent.get("toPerson")?.value);
    console.log(this.checkoutFormParent.get("creditCard")?.value)
      
      //this.cartService.cartOrder.forEach(it=>item.push(new Item(it)));

    //}
    
  }
  makeOrder(purchaseRequest:PurchaseRequest){
    console.log("kkkkkk");
    this.purchaseService.makeOrder(purchaseRequest).subscribe(
      data=>{
        console.log("kkkk");
        console.log(data.name);
        console.log(data.code);
        this.clear();
      },
      error=>{
        console.log(error);
      }
    )
  }
  clear(){
    this.cartService.cartOrder=[];
    this.cartService.totalPrices .next(0);
    this.cartService.numOfItems .next(0);
    this.checkoutFormParent.controls["data"].reset();
    this.checkoutFormParent.controls["fromPerson"].reset();
    this.checkoutFormParent.controls["toPerson"].reset();

    this.router.navigateByUrl("allOrders");
   // this.cartService.numOfItems = new B0;
  }


}
