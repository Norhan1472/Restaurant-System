import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit{
 orders:Cart[]=[];

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.getOrdersInCart();
  }
  getOrdersInCart(){
    this.orders = this.cartService.cartOrder ;
  }
  addOrder(order:Cart){
    console.log("hereee");
    this.cartService.addOrderToCart(order);
    this.getOrdersInCart();
  }
  decrementOrder(order:Cart){
    this.cartService.decrementOrder(order);
    this.getOrdersInCart();
  }
  remove(order:Cart){
    this.cartService.removeFromArray(order);
    this.getOrdersInCart();
  }
}
