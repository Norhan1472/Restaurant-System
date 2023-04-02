import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
   order : Order = new Order(0,"",new Date(),new Date(),"",0,"");
  constructor(private route:ActivatedRoute,
              private orderService:OrderService){}
  ngOnInit(): void {
    this.getOrderById();
  }

  getOrderById(){
    let orderId = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(orderId).subscribe(
      data=>{
        console.log(data);
        this.order=data;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
