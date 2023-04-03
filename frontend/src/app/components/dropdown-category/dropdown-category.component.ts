import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dropdown-category',
  templateUrl: './dropdown-category.component.html',
  styleUrls: ['./dropdown-category.component.css']
})
export class DropdownCategoryComponent implements OnInit{
  orders : Order[]=[];

  constructor(private orderService:OrderService,
              private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      ()=>{
        this.getOrders();
      }
    )
  
  }
  getOrders(){
    let checkCategoryId = this.route.snapshot.paramMap.has('id');
    if(checkCategoryId){
      this.getOrderByCategoryId();
    }else{
      this.getAllOrders();
    }
  }

  getAllOrders(){
    this.orderService.getAllOrders().subscribe(
      data=>{
          this.orders=data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getOrderByCategoryId(){
    let categoryId = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderByCategoryId(categoryId,5,5).subscribe(
      data=>{
        this.orders = data;
      },
      error=>{
        console.log(error);
      }
    ) 
  }


}
