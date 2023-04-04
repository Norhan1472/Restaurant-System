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
      this.calculateTotals();
      console.log(this.totalPrices);
      console.log(this.numOfItems);
  }
  calculateTotals(){
    let calculatePrices=0 ;
    let calculateItems =0;
    for(let data of this.cartOrder){
      calculatePrices+=(data.quantity * data.price);
      this.totalPrices .next(calculatePrices);
      calculateItems +=data.quantity;
      this.numOfItems.next(calculateItems);  
    }
  }
  decrementOrder(order:Cart){
    order.quantity--;
    if(order.quantity==0){
      this.removeFromArray(order);
    }else{
      this.calculateTotals();
    }
   
  }
  removeFromArray(order:Cart){
    let index = this.cartOrder.findIndex(temp => temp.id === order.id);
    this.cartOrder.splice(index,1);
    this.calculateTotals;
  }

}
