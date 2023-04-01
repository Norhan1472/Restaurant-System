import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit{
  orders : Order[] = [];

  constructor(private orderService:OrderService){
  }

  ngOnInit(): void {
    this.getAllOrders();
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
}
