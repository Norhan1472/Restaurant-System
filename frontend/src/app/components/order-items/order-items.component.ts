import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit{
  orders : Order[] = [];
  orderSize:number = 5;
  pageSize=5;
  page :number =1;
  constructor(private orderService:OrderService,
              private route:ActivatedRoute,
              private cartService:CartService){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      ()=>{
        this.getData();
      }
    )

  }

  getData(){
   
    let checkCategoryId = this.route.snapshot.paramMap.has('id');
    let checkOrderName = this.route.snapshot.paramMap.has('key');
    console.log(checkOrderName);
    if(checkCategoryId){
      this.getOrderByCategoryId();
    }else if(checkOrderName){
      this.getOrderByKey();
    }else{
      this.getAllOrders();
    }
  }

  getAllOrders():void{
    this.getSizeOfOrders();
    this.orderService.getAllOrdersWithPaging(this.page-1,this.pageSize).subscribe(
      data=>{
        this.orders = data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  getSizeOfOrders(){
    this.orderService.getOrdersLength().subscribe(
      data=>{
        this.orderSize = data;
      }
    )
  }

    getOrderByCategoryId(){
      let categoryId = this.route.snapshot.paramMap.get('id');
      this.getSizeOfOrdersByCategoryId(categoryId);
      this.orderService.getOrderByCategoryId(categoryId,this.page-1,this.pageSize).subscribe(
       data=>{
        this.orders=data;
       },
       error=>{
        console.log(error);
       }
      )
    }
    getSizeOfOrdersByCategoryId( id:any){
      this.orderService.getSizeOfOrdersByCategoryId(id).subscribe(
        data=>{
          this.orderSize=data;
        }
      )
    }

    getOrderByKey(){
      let orderKey = this.route.snapshot.paramMap.get('key');
      this.getSizeOfOrdersByKey(orderKey);
      this.orderService.getOrderByKey(orderKey,this.page-1,this.pageSize).subscribe(
        data=>{
          this.orders = data;
        },
        error=>{
          console.log(error);
        }
      )
    }
    getSizeOfOrdersByKey(word:any){
      this.orderService.getSizeOfOrdersByKey(word).subscribe(
        data=>{
          this.orderSize=data;
        },
        error=>{
          console.log(error);
        }
      )
    }
    done(){
      this.getData();
    }
    pageLength(event:Event){
      console.log("here");
      this.pageSize = +(<HTMLInputElement>event.target).value;
      console.log(this.pageSize);
      this.getData();
    }
    addToCart(order:Order){
      let cartData : Cart =  new Cart(order)
      console.log(cartData);
      this.cartService.addOrderToCart(cartData);

    }
}
