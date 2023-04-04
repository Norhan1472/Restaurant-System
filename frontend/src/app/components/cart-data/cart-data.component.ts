import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit{
  totalPrices!:number;
  NumOfItems!:number;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.cartService.totalPrices.subscribe(
      data=>{
        this.totalPrices=data;
      });

    this.cartService.numOfItems.subscribe(
      data=>{
        this.NumOfItems=data;
      }
    )

  }

}
