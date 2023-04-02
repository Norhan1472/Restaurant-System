import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit{
  orders : Order[] = [];

  constructor(private orderService:OrderService,
              private route:ActivatedRoute){
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
    if(checkCategoryId){
      this.getOrderByCategoryId();
    }else if(checkOrderName){
      this.getOrderByKey();
    }else{
      this.getAllOrders();
    }
  }

  getAllOrders():void{
    this.orderService.getAllOrders().subscribe(
      data=>{
        this.orders = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

    getOrderByCategoryId(){
      let categoryId = this.route.snapshot.paramMap.get('id');
      this.orderService.getOrderByCategoryId(categoryId).subscribe(
       data=>{
        this.orders=data;
       },
       error=>{
        console.log(error);
       }
      )
    }

    getOrderByKey(){
      let orderKey = this.route.snapshot.paramMap.get('key');
      this.orderService.getOrderByKey(orderKey).subscribe(
        data=>{
          this.orders = data;
        },
        error=>{
          console.log(error);
        }
      )
    }
}
