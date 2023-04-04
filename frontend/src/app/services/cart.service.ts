import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrices : Subject<number>= new Subject<number>();
  numOfItems : Subject<number>= new Subject<number>();
  cartOrder : Cart[]=[];

  constructor() { }
  addOrderToCart(cart:Cart){
    let calculatePrices=0 ;
    let calculateItems =0;
    let checkCart: Cart | undefined = undefined;
    if(this.cartOrder.length>0)
      /*for(let cartData of this.cartOrder){
        if(cartData.id==cart.id){
            checkCart=cartData;
        }*/
        checkCart = this.cartOrder.find(temp=> temp.id === cart.id);
      
      if(checkCart != undefined){
        checkCart.quantity++;
      }else{
        this.cartOrder.push(cart);
      }
      console.log("cart Data");
      console.log(this.cartOrder);
      console.log(this.cartOrder.length);
      for(let data of this.cartOrder){
        calculatePrices+=(data.quantity * data.price);
        this.totalPrices .next(calculatePrices);
        calculateItems +=data.quantity;
        this.numOfItems.next(calculateItems);  

      }
      console.log(this.totalPrices);
      console.log(this.numOfItems);
  }

}
